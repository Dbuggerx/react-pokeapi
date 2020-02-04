import { filter, map, mergeMap, catchError } from "rxjs/operators";
import { INamedApiResourceList, IPokemon } from "pokeapi-typescript";
import { Actions, actions } from "./index";
import { TypedEpic } from "../types";
import { of } from "rxjs";

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

const fetchPageEpic: TypedEpic<
  | ReturnType<Actions["fetchPage"]>
  | ReturnType<Actions["pageFetched"]>
  | ReturnType<Actions["setError"]>,
  INamedApiResourceList<IPokemon>
> = (action$, state$, { observableFetch }) => {
  return action$.pipe(
    filter(actions.fetchPage.match),
    mergeMap(action => {
      const urlData =
        "url" in action.payload
          ? getUrlDataByAddress(action.payload.url)
          : getDefaultUrlData(action.payload.offset, action.payload.size);

      return observableFetch(urlData.url).pipe(
        map(jsonResult => {
          return jsonResult instanceof Error
            ? actions.setError(jsonResult.message)
            : actions.pageFetched({
                page: jsonResult,
                size: urlData.size,
                offset: urlData.offset
              });
        }),
        catchError(error => {
          return of(actions.setError(error.message || error));
        })
      );
    })
  );
};

export default fetchPageEpic;
