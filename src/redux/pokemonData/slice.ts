import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPokemon } from "pokeapi-typescript";
import { LoadableResource } from "../types";

type State = LoadableResource<IPokemon>;

export default createSlice({
  name: "pokemonData",
  initialState: {
    loading: false,
    error: undefined,
    data: undefined
  } as State,
  reducers: {
    fetchData: (state, action: PayloadAction<{ url: string } | { name: string }>) => ({
      loading: true,
      error: undefined,
      data: undefined
    }),
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
      loading: false,
      data: undefined,
      error: undefined
    })
  }
});
