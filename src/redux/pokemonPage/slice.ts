import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INamedApiResourceList, IPokemon } from "pokeapi-typescript";
import { LoadableResource } from "../types";

export type InitialState = LoadableResource<INamedApiResourceList<IPokemon>> & {
  pageCount: number;
  currentPage: number;
  details: Map<string, LoadableResource<IPokemon>>;
};

const initialState: InitialState = {
  loading: false,
  error: undefined as string | undefined,
  pageCount: 0,
  currentPage: 0,
  data: undefined,
  details: new Map<string, LoadableResource<IPokemon>>()
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
      state.details = new Map<string, LoadableResource<IPokemon>>();
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
      const newDetails = new Map(state.details);

      newDetails.set(action.payload, {
        loading: true,
        error: undefined,
        data: undefined
      });

      state.details = newDetails;
    },
    setDetailsError: (
      state,
      action: PayloadAction<{ pokemonName: string; error: string }>
    ) => {
      const newDetails = new Map(state.details);

      newDetails.set(action.payload.pokemonName, {
        loading: false,
        error: action.payload.error,
        data: undefined
      });

      state.details = newDetails;
    },
    detailsFetched: (
      state,
      action: PayloadAction<{ pokemonName: string; data: IPokemon }>
    ) => {
      const newDetails = new Map(state.details);

      newDetails.set(action.payload.pokemonName, {
        loading: false,
        error: undefined,
        data: action.payload.data
      });

      state.details = newDetails;
    }
  }
});
