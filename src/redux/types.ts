import type { Action, AnyAction, PayloadAction } from "@reduxjs/toolkit";
import { createSelectorHook } from "react-redux";
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
export type TypedEpic<A extends Action = AnyAction | PayloadAction> = Epic<
  A,
  A,
  AppState,
  EpicDependencies
>;

export const useTypedSelector = createSelectorHook<AppState>();

export type LoadableResource<T> = {
  loading: boolean;
  error: string | undefined;
  data: T | undefined;
};
