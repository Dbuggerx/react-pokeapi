import { fromFetch } from "rxjs/fetch";
import { switchMap } from "rxjs/operators";
import { throwError } from "rxjs";
import { ApiError } from "./errors";

/**
 * @typeparam T - The result type
 * @throws ApiError
 */
const observableFetch = <T>(...args: Parameters<typeof fromFetch>) =>
  fromFetch
    .apply(undefined, args)
    .pipe(
      switchMap(response =>
        !response.ok
          ? throwError(new ApiError(response))
          : (response.json() as Promise<T>)
      )
    );

export default observableFetch;
