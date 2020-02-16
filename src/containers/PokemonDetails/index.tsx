import React from "react";
import * as hooks from "../../hooks/pokemonData";
import LoadingSpinner from '../../components/LoadingSpinner';
import PokemonDetailsLayout from '../../components/PokemonDetailsLayout';

const PokemonDetails: React.FC = () => {
  hooks.usePokemonDataEffect();

  const pokemonData = hooks.usePokemonDataState();
  if (!pokemonData) return <div>No data</div>;
  if (pokemonData.error) return <div>{pokemonData.error}</div>;
  if (pokemonData.loading) return <LoadingSpinner />;
  if (!pokemonData.data) return <div>No data</div>;

  return (
    <div>
      <h2>Pokemon data</h2>
      <PokemonDetailsLayout details={pokemonData} />
    </div>
  );
};

export default PokemonDetails;
