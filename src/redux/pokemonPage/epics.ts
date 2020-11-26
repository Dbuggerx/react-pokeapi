import { AnyAction } from "@reduxjs/toolkit";
import type { INamedApiResourceList, IPokemon } from "pokeapi-typescript";
import { combineEpics, ofType } from "redux-observable";
import { Observable, of } from "rxjs";
import {
  catchError,
  filter,
  map,
  mergeMap,
  switchMap,
  takeUntil
} from "rxjs/operators";
import { ApiError } from "../errors";
import type { TypedEpic } from "../types";
import { actions } from "./index";

const getUrlDataByAddress = (url: string) => {
  const urlObj = new URL(url);
  return {
    url,
    size: parseInt(urlObj.searchParams.get("limit")!, 10),
    offset: parseInt(urlObj.searchParams.get("offset")!, 10)
  };
};

const getDefaultUrlData = (offset: number, size: number) => ({
  url: `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${size}`,
  size,
  offset
});

const fetchPageEpic: TypedEpic = (action$, state$, { observableFetch }) => {
  return action$.pipe(
    filter(actions.fetchPage.match),
    switchMap(action => {
      const urlData =
        "url" in action.payload
          ? getUrlDataByAddress(action.payload.url)
          : getDefaultUrlData(action.payload.offset, action.payload.size);

      return observableFetch<INamedApiResourceList<IPokemon>>(urlData.url).pipe(
        mergeMap(
          json =>
            new Observable<AnyAction>(subscriber => {
              subscriber.next(
                actions.pageFetched({
                  page: json,
                  size: urlData.size,
                  offset: urlData.offset
                })
              );

              for (const result of json.results) {
                subscriber.next(actions.fetchDetails(result.name));
              }
            })
        ),
        catchError(error =>
          of(
            actions.setError(
              error instanceof ApiError && error.message === "404"
                ? "Nothing found"
                : error.message || error
            )
          )
        )
      );
    })
  );
};

const fetchPokemonDetailsEpic: TypedEpic = (
  action$,
  state$,
  { observableFetch }
) => {
  return action$.pipe(
    filter(actions.fetchDetails.match),
    mergeMap(action => {
      const url = `https://pokeapi.co/api/v2/pokemon/${action.payload.toLowerCase()}/`;

      return observableFetch<IPokemon>(url).pipe(
        map(jsonResult =>
          actions.detailsFetched({
            pokemonName: action.payload,
            data: jsonResult
          })
        ),
        catchError(error =>
          of(
            actions.setDetailsError({
              pokemonName: action.payload,
              error:
                error instanceof ApiError && error.message === "404"
                  ? "Nothing found"
                  : error.message || error
            })
          )
        ),
        takeUntil(action$.pipe(ofType(actions.fetchPage.type)))
      );
    })
  );
};

export default combineEpics(fetchPageEpic, fetchPokemonDetailsEpic);
