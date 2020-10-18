import type { Action, AnyAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { Epic } from "redux-observable";
import type { Observable } from "rxjs";
import observableFetch from "./observableFetch";
import rootReducer from "./rootReducer";

export type ObservableFetch<T> = (
  ...args: Parameters<typeof fetch>
) => Observable<T>;

export type AppState = ReturnType<typeof rootReducer>;

export type EpicDependencies = {
  observableFetch: typeof observableFetch;
};

/**
 * @typeparam A - The Action type
 */
export type TypedEpic<A extends Action = AnyAction> = Epic<
  A,
  A,
  AppState,
  EpicDependencies
>;

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;

export type LoadableResource<T> = {
  loading: boolean;
  error: string | undefined;
  data: T | undefined;
};
