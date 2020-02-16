import React from "react";
import * as hooks from "../../hooks/pokemonPage";
import CardLayout from "../../components/CardLayout";
import PokemonCard from "../../components/PokemonCard";
import Pagination from "../../components/Pagination";
import ResourceState from "../../components/ResourceState";

const PokemonListContainer: React.FC = () => {
  hooks.useFetchInitialPageEffect();
  const state = hooks.usePokemonPageState();
  const goToDetails = hooks.useGoToDetails();
  const changePage = hooks.useFetchPage();

  return (
    <>
      <ResourceState state={state} />
      <CardLayout>
        {state.data &&
          state.data.results.map(r => (
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
