import type { AnyAction } from "@reduxjs/toolkit";
import type { IPokemon, IPokemonSpecies } from "pokeapi-typescript";
import { combineEpics } from "redux-observable";
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

const fetchPokemonEpic: TypedEpic = (action$, state$, { observableFetch }) => {
  return action$.pipe(
    filter(actions.fetchData.match),
    switchMap(action => {
      const url =
        "url" in action.payload
          ? action.payload.url
          : `https://pokeapi.co/api/v2/pokemon/${action.payload.name.toLowerCase()}/`;

      return observableFetch<IPokemon>(url).pipe(
        mergeMap(
          jsonResult =>
            new Observable<AnyAction>(subscriber => {
              subscriber.next(actions.dataFetched(jsonResult));
              subscriber.next(actions.fetchSpecies(jsonResult.species.url));
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
        ),
        takeUntil(action$.pipe(filter(actions.clearData.match)))
      );
    })
  );
};

const fetchPokemonSpeciesEpic: TypedEpic = (
  action$,
  state$,
  { observableFetch }
) =>
  action$.pipe(
    filter(actions.fetchSpecies.match),
    switchMap(action =>
      observableFetch<IPokemonSpecies>(action.payload).pipe(
        map(jsonResult => actions.speciesFetched(jsonResult)),
        catchError(error =>
          of(
            actions.setSpeciesError(
              error instanceof ApiError && error.message === "404"
                ? "Nothing found"
                : error.message || error
            )
          )
        ),
        takeUntil(action$.pipe(filter(actions.clearData.match)))
      )
    )
  );

export default combineEpics(fetchPokemonEpic, fetchPokemonSpeciesEpic);
