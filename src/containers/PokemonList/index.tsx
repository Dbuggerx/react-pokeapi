import React from "react";
import * as hooks from "../../hooks/pokemonPage";
import LoadingSpinner from "../../components/LoadingSpinner";
import CardLayout from "../../components/CardLayout";
import PokemonCard from "../../components/PokemonCard";
import Pagination from "../../components/Pagination";

const PokemonListContainer: React.FC = () => {
  hooks.useFetchInitialPageEffect();
  const state = hooks.usePokemonPageState();
  const goToDetails = hooks.useGoToDetails();
  const changePage = hooks.useFetchPage();

  if (!state) return <div>No data</div>;
  if (state.error) return <div>{state.error}</div>;
  if (state.loading) return <LoadingSpinner />;
  if (!state.data) return <div>No data</div>;

  return (
    <>
      <CardLayout>
        {state.data.results.map(r => (
          <PokemonCard
            key={r.name}
            pokemonName={r.name}
            details={state.details.get(r.name)}
            onClick={() => {
              goToDetails(r.name);
            }}
          />
        ))}
      </CardLayout>
      <Pagination
        currentPage={state.currentPage}
        pageCount={state.pageCount}
        onPrev={changePage.fetchPrevPage}
        onNext={changePage.fetchNextPage}
      />
    </>
  );
};

export default PokemonListContainer;
