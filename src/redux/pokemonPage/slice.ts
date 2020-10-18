import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { INamedApiResourceList, IPokemon } from "pokeapi-typescript";
import type { LoadableResource } from "../types";

export type InitialState = LoadableResource<INamedApiResourceList<IPokemon>> & {
  pageCount: number;
  currentPage: number;
  details: { [key: string]: LoadableResource<IPokemon> | undefined };
};

const initialState: InitialState = {
  loading: false,
  error: undefined as string | undefined,
  pageCount: 0,
  currentPage: 0,
  data: undefined,
  details: {},
};

export default createSlice({
  name: "pokemonPage",
  initialState,
  reducers: {
    fetchPage: (
      state,
      action: PayloadAction<{ size: number; offset: number } | { url: string }>
    ) => {
      state.loading = true;
      state.data = undefined;
      state.error = undefined;
      state.details = {};
    },
    pageFetched: (
      state,
      action: PayloadAction<{
        page: INamedApiResourceList<IPokemon>;
        size: number;
        offset: number;
      }>
    ) => {
      state.loading = false;
      state.data = action.payload.page;
      state.pageCount = Math.ceil(action.payload.page.count / action.payload.size);
      state.currentPage =
        state.pageCount -
        Math.ceil(
          (action.payload.page.count - action.payload.offset) / action.payload.size
        ) +
        1;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    fetchDetails: (state, action: PayloadAction<string>) => {
      state.details[action.payload] = {
        loading: true,
        error: undefined,
        data: undefined,
      };
    },
    setDetailsError: (
      state,
      action: PayloadAction<{ pokemonName: string; error: string }>
    ) => {
      state.details[action.payload.pokemonName] = {
        loading: false,
        error: action.payload.error,
        data: undefined,
      };
    },
    detailsFetched: (
      state,
      action: PayloadAction<{ pokemonName: string; data: IPokemon }>
    ) => {
      state.details[action.payload.pokemonName] = {
        loading: false,
        error: undefined,
        data: action.payload.data,
      };
    },
  },
});
