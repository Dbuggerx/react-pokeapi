import type { ThunkAction, Action } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import pokemonPageSlice from "../features/pokemon-page/slice";

function getRootReducer() {
  return {
    [pokemonPageSlice.name]: pokemonPageSlice.reducer,
  };
}

type RootReducer = ReturnType<typeof getRootReducer>;

export function buildStore(
  preloadedState?: Partial<{
    [K in keyof RootReducer]: ReturnType<RootReducer[K]>;
  }>
) {
  return configureStore({
    reducer: getRootReducer(),
    preloadedState,
  });
}

type Store = ReturnType<typeof buildStore>;

export type AppDispatch = Store["dispatch"];
export type RootState = ReturnType<Store["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
