import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { searchPokemonName } from "./service";

const slice = createSlice({
  name: "filteredPokemonNames",
  initialState: {
    name: "",
    suggestions: [] as string[],
  },
  reducers: {
    updateSuggestions: (state, action: PayloadAction<string | undefined>) => {
      if (action.payload?.length) {
        state.name = action.payload;

        state.suggestions = searchPokemonName(action.payload).sort();
      } else {
        state.name = "";
        state.suggestions = [];
      }
    },
  },
});

export default slice;

export const actions = { ...slice.actions };
