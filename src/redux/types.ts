import { Action } from "redux";
import { Epic } from "redux-observable";
import { Observable } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import rootReducer from "./rootReducer";

export type ObservableFetch<T> = (
  ...args: Parameters<typeof fetch>
) => Observable<T>;

export type AppState = ReturnType<typeof rootReducer>;

export type EpicDependencies<T = unknown> = {
  observableFetch: (
    ...args: Parameters<typeof fromFetch>
  ) => Observable<T | Error>;
};

/**
 * @typeparam A - The Action type
 * @typeparam R - The API result type
 */
export type TypedEpic<A extends Action, R> = Epic<
  A,
  A,
  AppState,
  EpicDependencies<R>
>;

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
