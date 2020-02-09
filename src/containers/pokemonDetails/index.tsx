import React from "react";
import * as hooks from "../../hooks/pokemonData";

const PokemonDetails: React.FC = () => {
  hooks.usePokemonDataEffect();

  const pokemonData = hooks.usePokemonDataState();
  if (!pokemonData) return <div>No data</div>;
  if (pokemonData.error) return <div>{pokemonData.error}</div>;
  if (pokemonData.loading) return <div>Loading...</div>;
  if (!pokemonData.data) return <div>No data</div>;

  return (
    <div>
      <h2>Pokemon data</h2>
      <dl>
        <dt>Name</dt>
        <dd>{pokemonData.data.name}</dd>
        <dt>Type</dt>
        <dd>
          {pokemonData.data.types.map(t => (
            <div key={t.type.name}>{t.type.name}</div>
          ))}
        </dd>
      </dl>
    </div>
  );
};

export default PokemonDetails;
