import React from "react";
import CardLayout from "../../components/CardLayout";
import Footer from "../../components/Footer";
import Pagination from "../../components/Pagination";
import PokemonCard, { PokemonNameSvgShape } from "../../components/PokemonCard";
import ResourceState from "../../components/ResourceState";
import * as hooks from "../../hooks/pokemonPage";

const PokemonListContainer: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  hooks.useFetchInitialPageEffect();
  const state = hooks.usePokemonPageState();
  const goToDetails = hooks.useGoToDetails(ref);
  const changePage = hooks.useFetchPage();

  return (
    <>
      <ResourceState state={state} />
      {state.data && (
        <>
          <PokemonNameSvgShape />
          <CardLayout ref={ref}>
            {state.data.results.map(r => (
              <PokemonCard
                key={r.name}
                pokemonName={r.name}
                details={state.details[r.name]}
                onClick={() => {
                  goToDetails(r.name);
                }}
              />
            ))}
          </CardLayout>
        </>
      )}

      <Footer>
        <Pagination
          currentPage={state.currentPage}
          pageCount={state.pageCount}
          onPrev={changePage.fetchPrevPage}
          onNext={changePage.fetchNextPage}
        />
      </Footer>
    </>
  );
};

export default PokemonListContainer;
