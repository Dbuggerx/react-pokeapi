import { combineEpics } from "redux-observable";
import { catchError } from "rxjs/operators";
import { epics as pokemonPageEpic } from "./pokemonPage";

const epics = [pokemonPageEpic];

export default (action$, store$, dependencies) =>
  combineEpics(...epics)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error("Epic error:", error);
      return source;
    })
  );
