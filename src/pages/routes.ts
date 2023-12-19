import { generatePath } from "react-router-dom";

export const pokemonDetailsRoute = {
  path: "details/:pokemonName",
  generate(pokemonName: string) {
    return generatePath(this.path, { pokemonName: pokemonName as string });
  },
};
