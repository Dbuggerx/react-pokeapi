import { filter, map, mergeMap, catchError } from "rxjs/operators";
import { IPokemon } from "pokeapi-typescript";
import { Actions, actions } from "./index";
import { TypedEpic } from "../types";
import { of } from "rxjs";

const fetchPokemonEpic: TypedEpic<
  | ReturnType<Actions["fetchData"]>
  | ReturnType<Actions["dataFetched"]>
  | ReturnType<Actions["setError"]>,
  IPokemon
> = (action$, state$, { observableFetch }) => {
  return action$.pipe(
    filter(actions.fetchData.match),
    mergeMap(action => {
      const url =
        "url" in action.payload
          ? action.payload.url
          : `https://pokeapi.co/api/v2/pokemon/${action.payload.name.toLowerCase()}/`;

      return observableFetch(url).pipe(
        map(jsonResult => {
          return jsonResult instanceof Error
            ? actions.setError(jsonResult.message)
            : actions.dataFetched(jsonResult);
        }),
        catchError(error => {
          return of(actions.setError(error.message || error));
        })
      );
    })
  );
};

export default fetchPokemonEpic;
