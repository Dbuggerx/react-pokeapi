import { combineReducers } from "@reduxjs/toolkit";
import filteredPokemonNames from "./filteredPokemonNames";
import pokemonData from "./pokemonData";
import pokemonPage from "./pokemonPage";

export default combineReducers({
  pokemonPage,
  pokemonData,
  filteredPokemonNames
});
