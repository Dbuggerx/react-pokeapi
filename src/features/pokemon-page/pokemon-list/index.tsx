import { Link } from "react-router-dom";
import PokemonCard, { PokemonNameSvgShape } from "../pokemon-card";
import { useFetchPage, usePageData } from "./hooks";
import { pokemonDetailsRoute } from "../../../pages/routes";
import ErrorMessage from "../../../components/error-message";
import LoadingSpinner from "../../../components/loading-spinner";
import CardLayout from "../card-layout";
import Pagination from "../pagination";
import Footer from "../footer";

export default function List() {
  const { fetchNextPage, fetchPrevPage } = useFetchPage();
  const { isLoading, isError, pokemonInfoIds, currentPage, pageCount } =
    usePageData();

  return (
    <>
      <PokemonNameSvgShape />

      {isLoading ? (
        <LoadingSpinner />
      ) : isError ? (
        <ErrorMessage message="Error!" />
      ) : (
        <>
          <CardLayout>
            {pokemonInfoIds.map((pokemonName) => (
              <Link
                key={pokemonName}
                to={`/${pokemonDetailsRoute.generate(pokemonName)}`}
              >
                <PokemonCard pokemonName={pokemonName} />
              </Link>
            ))}
          </CardLayout>
          <footer>
            <Footer>
              <Pagination
                currentPage={currentPage}
                onNext={fetchNextPage}
                onPrev={fetchPrevPage}
                pageCount={pageCount}
              />
            </Footer>
          </footer>
        </>
      )}
    </>
  );
}
