import React from "react";
import { action } from "@storybook/addon-actions";
import PokemonList from "./index";
import { IPokemon } from "pokeapi-typescript";
import { number } from "@storybook/addon-knobs";

export default {
  title: "PokemonList",
  component: PokemonList
};

const pokemon = {
  name: "test",
  types: [
    { slot: 2, type: { name: "poison" } },
    { slot: 1, type: { name: "grass" } }
  ],
  sprites: {
    back_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
    back_female: null,
    back_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
    back_shiny_female: null,
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    front_female: null,
    front_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
    front_shiny_female: null
  }
} as IPokemon;

export const _default = () => {
  const mocks = Array.from({ length: number("item count", 15) }, (_, i) => ({
    pokemonName: `test ${i}`,
    details: {
      data: { ...pokemon, name: `test ${i}` },
      loading: false,
      error: undefined
    }
  }));
  return <PokemonList pokemons={mocks} />;
};
