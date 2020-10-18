import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { IPokemon, IPokemonSpecies } from "pokeapi-typescript";
import type { LoadableResource } from "../types";

type State = LoadableResource<IPokemon> & {
  species: LoadableResource<IPokemonSpecies>;
};

export default createSlice({
  name: "pokemonData",
  initialState: {
    loading: false,
    error: undefined,
    data: undefined,
    species: {
      loading: false,
      error: undefined,
      data: undefined
    }
  } as State,
  reducers: {
    fetchData: (
      state,
      action: PayloadAction<{ url: string } | { name: string }>
    ) => ({
      loading: true,
      error: undefined,
      data: undefined,
      species: {
        loading: false,
        error: undefined,
        data: undefined
      }
    }),
    dataFetched: (state, action: PayloadAction<IPokemon>) => {
      state.loading = false;
      state.error = undefined;
      state.data = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.data = undefined;
    },
    clearData: () => ({
      loading: false,
      data: undefined,
      error: undefined,
      species: {
        loading: false,
        error: undefined,
        data: undefined
      }
    }),
    fetchSpecies: (state, action: PayloadAction<string>) => {
      state.species = {
        loading: true,
        error: undefined,
        data: undefined
      };
    },
    speciesFetched: (state, action: PayloadAction<IPokemonSpecies>) => {
      state.species = {
        loading: false,
        error: undefined,
        data: action.payload
      };
    },
    setSpeciesError: (state, action: PayloadAction<string>) => {
      state.species = {
        loading: false,
        error: action.payload,
        data: undefined
      };
    }
  }
});
