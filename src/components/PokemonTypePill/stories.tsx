import React from "react";
import PokemonTypePill from "./index";
import { select, boolean } from "@storybook/addon-knobs";

export default {
  title: "PokemonTypePill",
  component: PokemonTypePill
};
export const _default = () => (
  <PokemonTypePill
    compact={boolean('compact', false)}
    pokemonType={select(
      "pokemon type",
      {
        normal: "normal",
        fighting: "fighting",
        flying: "flying",
        poison: "poison",
        ground: "ground",
        rock: "rock",
        bug: "bug",
        ghost: "ghost",
        steel: "steel",
        fire: "fire",
        water: "water",
        grass: "grass",
        electric: "electric",
        psychic: "psychic",
        ice: "ice",
        dragon: "dragon",
        dark: "dark",
        fairy: "fairy",
        unknown: "unknown",
        shadow: "shadow"
      },
      'normal'
    )}
  />
);
