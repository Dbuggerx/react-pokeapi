import React from "react";
import { usePokemonData } from "../../hooks/pokemonData";

const PokemonDetails: React.FC = () => {
  const pokemonData = usePokemonData();
  if (!pokemonData) return <div>No data</div>;
  if (pokemonData.error) return <div>{pokemonData.error}</div>;
  if (pokemonData.loading) return <div>Loading...</div>;
  if (!pokemonData.data) return <></>;

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
