import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPokemon } from "pokeapi-typescript";

export default createSlice({
  name: "pokemonData",
  initialState: {
    loading: false,
    error: undefined as string | undefined,
    data: undefined as IPokemon | undefined
  },
  reducers: {
    fetchData: (
      state,
      action: PayloadAction<{ url: string } | { name: string }>
    ) => {
      state.loading = true;
    },
    dataFetched: (state, action: PayloadAction<IPokemon>) => {
      state.loading = false;
      state.data = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    }
  }
});
