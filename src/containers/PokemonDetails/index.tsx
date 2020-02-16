import React from "react";
import * as hooks from "../../hooks/pokemonData";
import PokemonDetailsLayout from "../../components/PokemonDetailsLayout";
import ResourceState from "../../components/ResourceState";

const PokemonDetails: React.FC = () => {
  hooks.usePokemonDataEffect();
  const pokemonData = hooks.usePokemonDataState();

  return (
    <div>
      <h2>Pokemon data</h2>
      <ResourceState state={pokemonData} />
      <PokemonDetailsLayout details={pokemonData} />
    </div>
  );
};

export default PokemonDetails;
