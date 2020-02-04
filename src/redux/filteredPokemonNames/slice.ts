import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import pokemon from "pokemon";

export default createSlice({
  name: "filteredPokemonNames",
  initialState: [] as string[],
  reducers: {
    search: (_, action: PayloadAction<string>) => {
      return pokemon
        .all()
        .filter(p =>
          p.toLocaleLowerCase().startsWith(action.payload.toLowerCase())
        );
    }
  }
});
