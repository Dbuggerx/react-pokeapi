import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPokemon } from "pokeapi-typescript";

type State = {
  loading: boolean;
  error: string | undefined;
  data?: IPokemon;
};

export default createSlice({
  name: "pokemonData",
  initialState: {} as State,
  reducers: {
    fetchData: (
      state,
      action: PayloadAction<{ url: string } | { name: string }>
    ) => ({ loading: true, error: undefined }),
    dataFetched: (state, action: PayloadAction<IPokemon>) => ({
      loading: false,
      error: undefined,
      data: action.payload
    }),
    setError: (state, action: PayloadAction<string>) => ({
      loading: false,
      data: undefined,
      error: action.payload
    }),
    clearData: state => ({
      loading: undefined,
      data: undefined,
      error: undefined
    })
  }
});
