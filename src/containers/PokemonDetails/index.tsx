import React from "react";
import * as hooks from "../../hooks/pokemonData";
import PokemonDetailsLayout from "../../components/PokemonDetailsLayout";
import ResourceState from "../../components/ResourceState";
import TypePill from "../../components/PokemonTypePill";

const PokemonDetails: React.FC = () => {
  hooks.usePokemonDataEffect();
  const pokemonData = hooks.usePokemonDataState();

  return (
    <div>
      <h2>Pokemon data</h2>
      <ResourceState state={pokemonData} />
      {pokemonData.data && (
        <PokemonDetailsLayout
          pokemonName={pokemonData.data.name}
          images={
            <>
              {Object.entries(pokemonData.data.sprites)
                .filter(e => e[1])
                .map(e => (
                  <img src={e[1]} alt={e[0]} />
                ))}
            </>
          }
          types={
            <>
              {pokemonData.data.types.map(t => (
                <TypePill pokemonType={t.type.name} key={t.type.name} />
              ))}
            </>
          }
          profile={
            <>
              <p>
                Profile
                <ul>
                  <li>Height: {pokemonData.data.height / 10}m</li>
                  <li>Weight: {pokemonData.data.weight / 10}kg</li>
                </ul>
              </p>
              <p>
                Abilities:
                <ul>
                  {pokemonData.data.abilities.map(a => (
                    <li
                      key={a.ability.name}
                      title={a.is_hidden ? "Hidden ability" : "Normal ability"}
                    >
                      {a.ability.name}
                    </li>
                  ))}
                </ul>
              </p>
              <p>
                Stats:
                <ul>
                  {pokemonData.data.stats.map(s => (
                    <li key={s.stat.name}>
                      {s.stat.name}: {s.base_stat}
                    </li>
                  ))}
                </ul>
              </p>
            </>
          }
        />
      )}
    </div>
  );
};

export default PokemonDetails;
