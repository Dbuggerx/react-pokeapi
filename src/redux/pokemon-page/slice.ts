import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INamedApiResourceList, IPokemon } from "pokeapi-typescript";

export default createSlice({
  name: "counter",
  initialState: {
    loading: false,
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
      state.pageNumber = action.payload.page.count / action.payload.size;
    }
  }
});
