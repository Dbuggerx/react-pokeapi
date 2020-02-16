import { Action } from "redux";
import { Epic } from "redux-observable";
import { Observable } from "rxjs";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import rootReducer from "./rootReducer";
import observableFetch from "./observableFetch";
import { AnyAction } from "@reduxjs/toolkit";

export type ObservableFetch<T> = (...args: Parameters<typeof fetch>) => Observable<T>;

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
