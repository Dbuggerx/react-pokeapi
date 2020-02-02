import { filter, map, mergeMap, catchError, switchMap } from "rxjs/operators";
import { INamedApiResourceList, IPokemon } from "pokeapi-typescript";
import { Actions, actions } from "./index";
import { TypedEpic } from "../types";
import { of } from "rxjs";

const fetchPageEpic: TypedEpic<
  | ReturnType<Actions["fetchPage"]>
  | ReturnType<Actions["pageFetched"]>
  | ReturnType<Actions["setError"]>,
  INamedApiResourceList<IPokemon>
> = (action$, state$, { observableFetch }) => {
  return action$.pipe(
    filter(actions.fetchPage.match),
    mergeMap(action => {
      return observableFetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${
          action.payload.offset
        }&limit=${action.payload.size}`
      ).pipe(
        map(jsonResult =>
          jsonResult instanceof Error
            ? actions.setError(jsonResult.message)
            : actions.pageFetched({
                page: jsonResult,
                size: action.payload.size,
                offset: action.payload.offset
              })
        ),
        catchError(error => {
          return of(actions.setError(error.message || error));
        })
      );
    })
  );
};

export default fetchPageEpic;
