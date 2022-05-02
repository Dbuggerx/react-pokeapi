import type { EntityState } from "@reduxjs/toolkit";
import type { LoadableResource } from "../../redux/types";
import type { PokemonInfo } from "./types";

export function getUrlData(
  args: { size: number; offset: number } | { url: string }
) {
  return "url" in args
    ? getUrlDataByAddress(args.url)
    : getDefaultUrlData(args.offset, args.size);
}

function getUrlDataByAddress(url: string) {
  const urlObj = new URL(url);
  return {
    url,
    pageSize: parseInt(urlObj.searchParams.get("limit")!, 10),
    itemsOffset: parseInt(urlObj.searchParams.get("offset")!, 10),
  };
}

function getDefaultUrlData(itemsOffset: number, pageSize: number) {
  return {
    url: `https://pokeapi.co/api/v2/pokemon?offset=${itemsOffset}&limit=${pageSize}`,
    pageSize,
    itemsOffset,
  };
}

export function getPaginationInfo(
  totalItems: number,
  itemOffset: number,
  pageSize: number
) {
  const pageCount = Math.ceil(totalItems / pageSize);
  return {
    pageCount,
    currentPage:
      pageCount - Math.ceil((totalItems - itemOffset) / pageSize) + 1,
  };
}

export function idFromUrl(url: string) {
  return url.match(/(\d+)\/$/)?.[1];
}

export function speciesUrlSelector(
  state: EntityState<LoadableResource<PokemonInfo>>,
  pokemonName: string
) {
  return state.entities[pokemonName]?.data?.species?.url;
}
