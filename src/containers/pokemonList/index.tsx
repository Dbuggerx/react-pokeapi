import React from 'react';
import * as hooks from '../../hooks/pokemonPage';
import PokemonListItem from '../../components/pokemonListItem';

const PokemonList: React.FC = () => {
  hooks.usePokemonPageEffects();
  const state = hooks.usePokemonPageState();
  if (!state) return <div>No data</div>;
  if (state.error) return <div>{state.error}</div>;
  if (state.loading) return <div>Loading...</div>;
  if (!state.data) return <div>No data</div>;

  return (
    <div>
      <h2>Pokemon list</h2>
      <ul>
        {state.data.results.map(r => (
          <li key={r.name}>
            <PokemonListItem pokemonName={r.name} details={state.details.get(r.name)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
