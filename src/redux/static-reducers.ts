import pokemonPageSlice from "../features/pokemon-page/slice";

export const staticReducers = {
  [pokemonPageSlice.name]: pokemonPageSlice.reducer,
};

export type StaticReducers = typeof staticReducers;
