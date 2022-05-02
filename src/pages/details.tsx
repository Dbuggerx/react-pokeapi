import type { EntityId } from "@reduxjs/toolkit";
import { generatePath, Link } from "react-router-dom";
import PokemonInfo from "../features/pokemon-details/pokemon-info";

export default function Details({ backPath }: { backPath: string }) {
  return (
    <>
      <h1>Details</h1>
      <Link to={backPath}>Back</Link>
      <PokemonInfo />
    </>
  );
}

export const path = "details/:pokemonName";

export const generateDetailsPath = (pokemonName: EntityId) =>
  generatePath(path, { pokemonName: pokemonName as string });
