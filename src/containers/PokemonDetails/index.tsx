import React from "react";
import * as hooks from "../../hooks/pokemonData";
import PokemonDetailsLayout from "../../components/PokemonDetailsLayout";
import ResourceState from "../../components/ResourceState";
import TypePill from "../../components/PokemonTypePill";

const PokemonDetails: React.FC = () => {
  hooks.usePokemonDataEffect();
  const pokemonData = hooks.usePokemonDataState();

  const images =
    pokemonData.data && Object.entries(pokemonData.data.sprites).filter(e => e[1]);

  return (
    <>
      <ResourceState state={pokemonData} />
      {pokemonData.data && (
        <PokemonDetailsLayout
          backgroundImageUrl={images && images[0][1]}
          pokemonName={pokemonData.data.name}
          pokemonId={pokemonData.data.id}
          images={
            <>
              {images?.map(e => (
                <img src={e[1]} alt={e[0]} key={e[0]} />
              ))}
            </>
          }
          color={pokemonData.species.data?.color.name}
          types={
            <>
              {pokemonData.data.types.map(t => (
                <TypePill pokemonType={t.type.name} key={t.type.name} />
              ))}
            </>
          }
          descriptionTitle={
            pokemonData.species.data?.genera.find(g => g.language.name === "en")?.genus
          }
          description={
            <div>
              {pokemonData.species.data &&
                /*
                 * Unfortunatelly, the API results contain repeated data in "flavor_text_entries",
                 * varying sometimes in linebreaks or missing spaces between words.
                 * In the block below I try to remove linebreaks and remove duplications
                 */
                Array.from(
                  pokemonData.species.data.flavor_text_entries
                    .filter(i => i.language.name === "en")
                    // Remove linebreaks and invalid chars
                    .map(i => i.flavor_text.replace(/\r?\n|\r|\u000c/gm, " ")) // eslint-disable-line no-control-regex
                    .reduce(
                      /*
                       * As the text from the API can sometimes vary by missing spaces,
                       * I'm using the first 10 chars to differentiate the texts
                       */
                      (acc, cur) => acc.set(cur.toLowerCase().substring(0, 10), cur),
                      new Map<string, string>()
                    )
                    .values()
                ).reduce((acc, cur, index) => {
                  acc.push(
                    <span key={index}>
                      {acc.length > 0 && <br />}
                      {cur}
                    </span>
                  );
                  return acc;
                }, [] as React.ReactElement[])}
            </div>
          }
          profile={
            <ul>
              <li>Height: {pokemonData.data.height / 10}m</li>
              <li>Weight: {pokemonData.data.weight / 10}kg</li>
              {pokemonData.species.data?.shape.name && (
                <li>Shape: {pokemonData.species.data?.shape.name}</li>
              )}
              {pokemonData.species.data?.habitat?.name && (
                <li>Habitat: {pokemonData.species.data?.habitat.name}</li>
              )}
            </ul>
          }
          abilities={
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
          }
          stats={
            <ul>
              {pokemonData.data.stats.map(s => (
                <li key={s.stat.name}>
                  {s.stat.name}: {s.base_stat}
                </li>
              ))}
            </ul>
          }
        />
      )}
    </>
  );
};

export default PokemonDetails;
