import React from "react";
import type { EntityId } from "@reduxjs/toolkit";
import { generatePath, Link } from "react-router-dom";

const LazyPokemonInfo = React.lazy(
  () => import("../features/pokemon-details/pokemon-info")
);

export default function Details({ backPath }: { backPath: string }) {
  return (
    <>
      <h1>Details</h1>
      <Link to={backPath}>Back</Link>

      <React.Suspense fallback={<strong>Loading component...</strong>}>
        <LazyPokemonInfo />
      </React.Suspense>
    </>
  );
}

export const path = "details/:pokemonName";

export const generateDetailsPath = (pokemonName: EntityId) =>
  generatePath(path, { pokemonName: pokemonName as string });
