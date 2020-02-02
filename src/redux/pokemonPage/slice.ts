import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INamedApiResourceList, IPokemon } from "pokeapi-typescript";

export default createSlice({
  name: "pokemonPage",
  initialState: {
    loading: false,
    error: undefined as string | undefined,
    pageNumber: 0,
    page: undefined as INamedApiResourceList<IPokemon> | undefined
  },
  reducers: {
    fetchPage: (
      state,
      action: PayloadAction<{ size: number; offset: number }>
    ) => {
      state.loading = true;
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
      state.page = action.payload.page;
      state.pageNumber = Math.ceil(
        action.payload.page.count / action.payload.size
      );
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    }
  }
});
