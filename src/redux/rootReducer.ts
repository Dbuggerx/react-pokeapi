import { combineReducers } from "redux";
import pokemonPage from "./pokemonPage";
import pokemonData from "./pokemonPage";
import filteredPokemonNames from "./filteredPokemonNames";

export default combineReducers({
  pokemonPage,
  pokemonData,
  filteredPokemonNames
});
