import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INamedApiResourceList, IPokemon } from "pokeapi-typescript";

export default createSlice({
  name: "pokemonPage",
  initialState: {
    loading: false,
    error: undefined as string | undefined,
    pageCount: 0,
    currentPage: 0,
    data: undefined as INamedApiResourceList<IPokemon> | undefined
  },
  reducers: {
    fetchPage: (
      state,
      action: PayloadAction<{ size: number; offset: number } | { url: string }>
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
      state.data = action.payload.page;
      state.pageCount = Math.ceil(
        action.payload.page.count / action.payload.size
      );
      state.currentPage =
        state.pageCount -
        (action.payload.page.count - action.payload.offset) /
          action.payload.size;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    }
  }
});
