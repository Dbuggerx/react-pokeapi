import pokemonPageSlice from "../features/pokemon-page/slice";
import pokemonNamesSlice from "../features/pokemon-names/slice";

export const staticReducers = {
  [pokemonPageSlice.name]: pokemonPageSlice.reducer,
  [pokemonNamesSlice.name]: pokemonNamesSlice.reducer,
};

export type StaticReducers = typeof staticReducers;
