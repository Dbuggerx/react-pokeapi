import { configureStore } from "@reduxjs/toolkit";
import pokemonDetailsSlice from "../features/pokemon-details/slice";
import { staticReducers } from "./static-reducers";

/**
 * Everything in this file is only meant for generating types
 */

const lazyReducers = {
  [pokemonDetailsSlice.name]: pokemonDetailsSlice.reducer,
};

function buildCompleteStore() {
  return configureStore({
    reducer: { ...lazyReducers, ...staticReducers },
  });
}

export type LazyReducers = typeof lazyReducers;

export type CompleteStoreType = ReturnType<typeof buildCompleteStore>;
