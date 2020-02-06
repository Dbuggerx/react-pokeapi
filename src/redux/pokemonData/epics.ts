import { filter, map, mergeMap, catchError } from "rxjs/operators";
import { IPokemon } from "pokeapi-typescript";
import { of } from "rxjs";
import { Actions, actions } from "./index";
import { TypedEpic } from "../types";
import { ApiError } from "../errors";

const fetchPokemonEpic: TypedEpic<
  | ReturnType<Actions["fetchData"]>
  | ReturnType<Actions["dataFetched"]>
  | ReturnType<Actions["setError"]>
> = (action$, state$, { observableFetch }) => {
  return action$.pipe(
    filter(actions.fetchData.match),
    mergeMap(action => {
      const url =
        "url" in action.payload
          ? action.payload.url
          : `https://pokeapi.co/api/v2/pokemon/${action.payload.name.toLowerCase()}/`;

      return observableFetch<IPokemon>(url).pipe(
        map(jsonResult => actions.dataFetched(jsonResult)),
        catchError(error => {
          if (error instanceof ApiError && error.message === "404")
            return of(actions.setError("Nothing found"));
          return of(actions.setError(error.message || error));
        })
      );
    })
  );
};

export default fetchPokemonEpic;
