import type { DefaultRequestBody, PathParams } from "msw";
import { rest } from "msw";
import type { PokemonInfo, PokemonPageList } from "../types";

export const getPokemonPagePayload = (
  pageSize: number,
  currentPage: number
) => ({
  count: 123,
  next: "https://pokeapi.co/api/v2/pokemon?offset=10&limit=10",
  previous: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10",
  results: Array.from({ length: pageSize }, (_, i) => {
    const id = currentPage * pageSize + i;
    return {
      name: `result ${id}`,
      url: `https://pokeapi.co/api/v2/pokemon/${id}/`,
    };
  }),
});

export const regularPokemonPageHandler = rest.get<
  DefaultRequestBody,
  PathParams,
  PokemonPageList
>("https://pokeapi.co/api/v2/pokemon", (req, res, ctx) => {
  const currentPage =
    Number(req.url.searchParams.get("offset")) /
    Number(req.url.searchParams.get("limit"));

  const pageSize = 10;
  return res(ctx.json(getPokemonPagePayload(pageSize, currentPage)));
});

export const errorPokemonPageHandler = rest.get<
  DefaultRequestBody,
  PathParams,
  string
>("https://pokeapi.co/api/v2/pokemon", (req, res, ctx) =>
  res(ctx.status(403), ctx.text("Testing an error"))
);

export const regularPokemonInfoHandler = rest.get<
  DefaultRequestBody,
  PathParams,
  PokemonInfo
>("https://pokeapi.co/api/v2/pokemon/:pokemonId/", (req, res, ctx) => {
  const { pokemonId } = req.params;

  return res(
    ctx.json({
      name: pokemonId as string,
      types: [
        {
          slot: 1,
          type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        },
      ],
    })
  );
});
