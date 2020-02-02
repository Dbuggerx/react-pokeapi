import { fromFetch } from "rxjs/fetch";
import { switchMap } from "rxjs/operators";
import { of } from "rxjs";
import { EpicDependencies } from "./types";

const observableFetch: EpicDependencies["observableFetch"] = (...args) =>
  fromFetch
    .apply(undefined, args)
    .pipe(
      switchMap(response =>
        !response.ok
          ? of(new Error(`Error: ${response.statusText}`))
          : response.json()
      )
    );

export default observableFetch;
