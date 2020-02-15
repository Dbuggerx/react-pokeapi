import React from "react";
import * as hooks from "../../hooks/pokemonPage";
import CardLayout from "../../components/CardLayout";
import PokemonCard from "../../components/PokemonCard";

const PokemonListContainer: React.FC = () => {
  hooks.usePokemonPageEffects();
  const state = hooks.usePokemonPageState();
  const changeRoute = hooks.useChangeRouteCallback();

  if (!state) return <div>No data</div>;
  if (state.error) return <div>{state.error}</div>;
  if (state.loading) return <div>Loading...</div>;
  if (!state.data) return <div>No data</div>;

  return (
    <CardLayout>
      {state.data.results.map(r => (
        <PokemonCard
          key={r.name}
          pokemonName={r.name}
          details={state.details.get(r.name)}
          onClick={() => {
            changeRoute(r.name);
          }}
        />
      ))}
    </CardLayout>
  );
};

export default PokemonListContainer;
