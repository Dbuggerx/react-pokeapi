import type { ReducersMapObject, Slice } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import type { CompleteStoreType, LazyReducers } from "./lazy-reducers";
import type { StaticReducers } from "./static-reducers";
import { staticReducers } from "./static-reducers";

type ReducerState<T extends ReducersMapObject> = {
  [K in keyof T]: ReturnType<T[K]>;
};

export type RootState = ReducerState<StaticReducers> &
  ReducerState<LazyReducers>;

export function buildStore(preloadedState?: Partial<RootState>) {
  const store = configureStore({
    reducer: staticReducers,
    preloadedState,
  });

  const asyncReducers: ReducersMapObject = {};

  /**
   * @see https://redux.js.org/usage/code-splitting#defining-an-injectreducer-function
   */
  const injectSlice = (slice: Slice) => {
    if (asyncReducers[slice.name]) return;
    asyncReducers[slice.name] = slice.reducer;

    store.replaceReducer(
      combineReducers({ ...staticReducers, ...asyncReducers })
    );
  };

  return { store, injectSlice };
}

export type AppDispatch = CompleteStoreType["dispatch"];
