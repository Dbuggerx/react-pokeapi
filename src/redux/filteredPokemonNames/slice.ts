import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import pokemon from "pokemon";

const indexedNames = pokemon.all("en").reduce((acc, cur) => {
  const key = cur[0].toLowerCase();
  if (!acc.has(key)) acc.set(key, []);
  acc.get(key)!.push(cur);
  return acc;
}, new Map<string, string[]>());

export default createSlice({
  name: "filteredPokemonNames",
  initialState: {
    name: "",
    suggestions: [] as string[]
  },
  reducers: {
    updateSuggestions: (state, action: PayloadAction<string | undefined>) => {
      if (action.payload?.length) {
        state.name = action.payload;
        state.suggestions =
          indexedNames
            .get(action.payload[0].toLowerCase())
            ?.filter(p => p.toLowerCase().startsWith(action.payload!.toLowerCase()))
            .sort() || [];
      } else {
        state.name = "";
        state.suggestions = [];
      }
    }
  }
});
