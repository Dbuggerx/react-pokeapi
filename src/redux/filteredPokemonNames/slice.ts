import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import pokemon from "pokemon";

export default createSlice({
  name: "filteredPokemonNames",
  initialState: {
    name: "",
    suggestions: [] as string[]
  },
  reducers: {
    updateSuggestions: (state, action: PayloadAction<string | undefined>) => {
      if (action.payload) {
        state.name = action.payload;
        state.suggestions = pokemon
          .all()
          .concat()
          .sort()
          .filter(p =>
            p.toLocaleLowerCase().startsWith(action.payload!.toLowerCase())
          );
      } else {
        state.name = "";
        state.suggestions = pokemon
          .all()
          .concat()
          .sort();
      }
    }
  }
});
