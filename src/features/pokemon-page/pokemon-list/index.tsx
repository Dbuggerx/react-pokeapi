import { Link } from "react-router-dom";
import PokemonCard from "../pokemon-card";
import { useFetchPage, usePageData } from "./hooks";
import { generateDetailsPath } from "../../../pages/details";

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
            <Link to={`/${generateDetailsPath(pokemonName)}`}>Details</Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
