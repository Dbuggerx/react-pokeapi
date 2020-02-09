import { generatePath } from "react-router";

export const listRoute = {
  path: "/list"
};

export const pokemonRoute = {
  path: "/pokemon/:pokemonName",
  generate(params: { pokemonName: string }) {
    return generatePath(this.path, {
      ...params
    });
  }
};

export type PokemonRouteParams = Parameters<typeof pokemonRoute["generate"]>[0];
