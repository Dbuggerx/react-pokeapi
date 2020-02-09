import { filter, map, mergeMap, catchError } from "rxjs/operators";
import { IPokemon } from "pokeapi-typescript";
import { of } from "rxjs";
import { actions } from "./index";
import { TypedEpic } from "../types";
import { ApiError } from "../errors";

const fetchPokemonEpic: TypedEpic = (action$, state$, { observableFetch }) => {
  return action$.pipe(
    filter(actions.fetchData.match),
    mergeMap(action => {
      const url =
        "url" in action.payload
          ? action.payload.url
          : `https://pokeapi.co/api/v2/pokemon/${action.payload.name.toLowerCase()}/`;

      return observableFetch<IPokemon>(url).pipe(
        map(jsonResult => actions.dataFetched(jsonResult)),
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

export default fetchPokemonEpic;
