import React from "react";
import PokemonTypePill from "./index";

export default {
  title: "PokemonTypePill",
  component: PokemonTypePill
};
export const _default = () => (
  <PokemonTypePill compact={false} pokemonType={"normal"} />
);
