import { filter, map, mergeMap, catchError, switchMap } from "rxjs/operators";
import { IPokemon, IPokemonSpecies } from "pokeapi-typescript";
import { of, Observable } from "rxjs";
import { actions } from "./index";
import { TypedEpic } from "../types";
import { ApiError } from "../errors";
import { combineEpics } from "redux-observable";
import { AnyAction } from '@reduxjs/toolkit';

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
        )
      );
    })
  );
};

const fetchPokemonSpeciesEpic: TypedEpic = (action$, state$, { observableFetch }) =>
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
        )
      )
    )
  );

export default combineEpics(fetchPokemonEpic, fetchPokemonSpeciesEpic);
