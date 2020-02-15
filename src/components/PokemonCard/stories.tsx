import React from "react";
import PokemonCard from "./index";
import { IPokemon } from "pokeapi-typescript";
import { boolean, text } from "@storybook/addon-knobs";

export default {
  title: "PokemonCard",
  component: PokemonCard
};

const dataMock = {
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

export const _default = () => (
  <PokemonCard
    pokemonName="test"
    details={{
      data: dataMock,
      loading: boolean("loading", false),
      error: text("error", undefined)
    }}
  />
);
