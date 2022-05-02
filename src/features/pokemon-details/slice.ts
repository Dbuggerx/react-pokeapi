import type { EntityState } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import type { LoadableResource } from "../../redux/types";
import type { PokemonSpecies } from "./types";
import type { RootState } from "../../redux/store";
import * as thunks from "./thunks";

const pokemonSpeciesEntityAdapter = createEntityAdapter<PokemonSpecies>({
  selectId: (species) => species.id,
  sortComparer: (a, b) => (a.order && b.order ? a.order - b.order : 0),
});

const initialState: { species: LoadableResource<EntityState<PokemonSpecies>> } =
  {
    species: {
      loading: true,
      error: false,
      data: pokemonSpeciesEntityAdapter.getInitialState(),
    },
  };

const slice = createSlice({
  name: "pokemonDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(thunks.fetchPokemonSpecies.pending, (state) => {
        state.species.loading = true;
        state.species.error = false;
      })
      .addCase(thunks.fetchPokemonSpecies.rejected, (state, action) => {
        state.species.loading = false;
        if (action.meta.aborted) return;
        state.species.error = true;
      })
      .addCase(thunks.fetchPokemonSpecies.fulfilled, (state, action) => {
        state.species.loading = false;
        state.species.error = false;

        pokemonSpeciesEntityAdapter.setOne(state.species.data, action.payload);
      });
  },
});

export default slice;

export const actions = { ...slice.actions, ...thunks };

const pokemonDetailSelector = (state: RootState) => state.pokemonDetails;
const pokemonSpeciesSelector = createSelector(
  pokemonDetailSelector,
  (state) => state.species
);
const pokemonSpeciesDataSelector = createSelector(
  pokemonSpeciesSelector,
  (state) => state.data
);

export const selectors = {
  sliceAvailable: createSelector(pokemonDetailSelector, (state) => !!state),
  species: {
    ...pokemonSpeciesEntityAdapter.getSelectors(pokemonSpeciesDataSelector),
    isLoading: createSelector(pokemonSpeciesSelector, (state) => state.loading),
    isError: createSelector(pokemonSpeciesSelector, (state) => state.error),
  },
};
