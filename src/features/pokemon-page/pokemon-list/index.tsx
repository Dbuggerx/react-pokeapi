import React from "react";
import PokemonCard from "../pokemon-card";
import { useFetchPage, usePageData } from "./hooks";

export default function List() {
  const { fetchNextPage, fetchPrevPage } = useFetchPage();
  const { isLoading, isError, pokemonInfoIds, currentPage } = usePageData();

  return (
    <article>
      <header>
        <button onClick={fetchPrevPage}>Prev</button>
        <span>Page: {currentPage}</span>
        <button onClick={fetchNextPage}>Next</button>
      </header>
      {isLoading && <strong>Loading...</strong>}
      {isError && <strong>Error!</strong>}
      <ul>
        {pokemonInfoIds.map((pokemonName) => (
          <li key={pokemonName}>
            <PokemonCard pokemonName={pokemonName} />
          </li>
        ))}
      </ul>
    </article>
  );
}
