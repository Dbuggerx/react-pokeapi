import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";
import { idFromUrl, speciesUrlSelector } from "../pokemon-page/service";
import { fetchPokemonInfo } from "../pokemon-page/thunks";
import type { PokemonDetailsError, PokemonSpecies } from "./types";

export const getPokemonDetails = createAsyncThunk<
  void,
  { pokemonName: string },
  {
    state: RootState;
    rejectValue: PokemonDetailsError;
  }
>(
  "pokemonDetails/getPokemonDetails",
  async (args, { dispatch, getState, signal, rejectWithValue }) => {
    const pokemonInfo = dispatch(fetchPokemonInfo(args));

    signal.addEventListener("abort", () => {
      pokemonInfo.abort();
    });

    await pokemonInfo;

    const {
      pokemonPage: { info },
    } = getState();

    const speciesUrl = speciesUrlSelector(info, args.pokemonName);
    if (!speciesUrl) return rejectWithValue("species not found");

    const pokemonSpecies = dispatch(
      fetchPokemonSpecies({
        url: speciesUrl,
      })
    );

    signal.addEventListener("abort", () => {
      pokemonSpecies.abort();
    });
  }
);

export const fetchPokemonSpecies = createAsyncThunk<
  PokemonSpecies,
  { url: string },
  {
    state: RootState;
  }
>(
  "pokemonDetails/fetchPokemonSpecies",
  async (args, { signal, rejectWithValue }) => {
    const response = await fetch(args.url, { signal });

    if (!response.ok) return rejectWithValue(await response.text());

    return await response.json();
  },
  {
    condition: (args, { getState }) => {
      const speciesIdFromUrl = idFromUrl(args.url);

      if (!speciesIdFromUrl) return true;

      const {
        pokemonDetails: {
          species: { data },
        },
      } = getState();

      if (data.ids.includes(Number(speciesIdFromUrl))) {
        return false;
      }
    },
  }
);
