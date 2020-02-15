import React from "react";
import * as hooks from "../../hooks/pokemonPage";
import PokemonList from "../../components/pokemonList";

const PokemonListContainer: React.FC = () => {
  hooks.usePokemonPageEffects();
  const state = hooks.usePokemonPageState();
  if (!state) return <div>No data</div>;
  if (state.error) return <div>{state.error}</div>;
  if (state.loading) return <div>Loading...</div>;
  if (!state.data) return <div>No data</div>;

  return (
    <PokemonList
      pokemons={state.data.results.map(r => ({
        pokemonName: r.name,
        details: state.details.get(r.name)
      }))}
    />
  );
};

export default PokemonListContainer;
