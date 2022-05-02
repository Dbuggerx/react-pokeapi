import type {
  NamedAPIResource,
  Pokemon,
  NamedAPIResourceList,
} from "pokenode-ts";

export type PokemonPageItem = NamedAPIResource;
export type PokemonPageList = NamedAPIResourceList;
export type PokemonInfo = Partial<Pokemon> & {
  name: string;
};
