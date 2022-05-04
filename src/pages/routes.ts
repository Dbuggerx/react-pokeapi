import type { EntityId } from "@reduxjs/toolkit";
import { generatePath } from "react-router-dom";

export const pokemonDetailsRoute = {
  path: "details/:pokemonName",
  generate(pokemonName: EntityId) {
    return generatePath(this.path, { pokemonName: pokemonName as string });
  },
};
