import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";
import { getUrlData } from "./service";
import type { PokemonInfo, PokemonPageList } from "./types";

export const getPokemonPage = createAsyncThunk<
  void,
  { size: number; offset: number } | { url: string },
  {
    state: RootState;
  }
>(
  "pokemonPage/getPokemonPage",
  async (args, { dispatch, getState, signal }) => {
    const pokemonList = dispatch(fetchPokemonList(args));

    signal.addEventListener("abort", () => {
      pokemonList.abort();
    });

    await pokemonList;

    const {
      pokemonPage: { data },
    } = getState();

    const pokemonInfoRequests = data.ids.map((pokemonName) =>
      dispatch(fetchPokemonInfo({ pokemonName: pokemonName as string }))
    );

    signal.addEventListener("abort", () => {
      pokemonInfoRequests.forEach((promise) => {
        promise.abort();
      });
    });
  }
);

export const fetchPokemonInfo = createAsyncThunk<
  Required<PokemonInfo>,
  { pokemonName: string },
  {
    state: RootState;
  }
>(
  "pokemonPage/fetchPokemonInfo",
  async ({ pokemonName }, { signal, rejectWithValue }) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}/`,
      { signal }
    );

    if (!response.ok) return rejectWithValue(await response.text());

    return await response.json();
  },
  {
    condition: (args, { getState }) => {
      const {
        pokemonPage: { info },
      } = getState();
      const pokemonInfo = info.entities[args.pokemonName];

      if (pokemonInfo?.data.abilities) {
        return false;
      }
    },
  }
);

export const fetchPokemonList = createAsyncThunk<
  {
    page: PokemonPageList;
    pageSize: number;
    itemsOffset: number;
    url: string;
  },
  { size: number; offset: number } | { url: string },
  {
    state: RootState;
  }
>(
  "pokemonPage/fetchPokemonList",
  async (args, { signal, rejectWithValue }) => {
    const urlData = getUrlData(args);

    const response = await fetch(urlData.url, { signal });

    if (!response.ok) return rejectWithValue(await response.text());

    const page = await response.json();

    return {
      page,
      ...urlData,
    };
  },
  {
    condition: (args, { getState }) => {
      const {
        pokemonPage: { lastUrlFetched },
      } = getState();

      const { url } = getUrlData(args);

      if (url === lastUrlFetched) return false;
    },
  }
);
