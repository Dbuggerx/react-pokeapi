import { combineReducers } from "redux";
import pokemonPage from "./pokemonPage";
import pokemonData from "./pokemonData";
import filteredPokemonNames from "./filteredPokemonNames";

export default combineReducers({
  pokemonPage,
  pokemonData,
  filteredPokemonNames
});
