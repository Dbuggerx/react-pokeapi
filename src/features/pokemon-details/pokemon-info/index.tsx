import { useParams } from "react-router-dom";
import { usePokemonInfo } from "./hooks";
import pokemonDetailsSlice from "../slice";
import withLazyRedux from "../../../redux/with-lazy-redux";
import ErrorMessage from "../../../components/error-message";
import LoadingSpinner from "../../../components/loading-spinner";
import TypePill from "../../../components/pokemon-type-pill";
import PokemonDetailsLayout from "../pokemon-details-layout";

function PokemonInfo() {
  const { pokemonName } = useParams();
  const {
    error,
    isSpeciesLoading,
    isSpeciesError,
    images,
    pokemonInfo,
    species,
  } = usePokemonInfo(pokemonName);

  return error === "species not found" ? (
    <ErrorMessage message="Not Found!" />
  ) : error === "unexpected error" || isSpeciesError ? (
    <ErrorMessage message="Error!" />
  ) : isSpeciesLoading || !pokemonInfo?.data ? (
    <LoadingSpinner />
  ) : (
    <PokemonDetailsLayout
      backgroundImageUrl={
        pokemonInfo?.data?.sprites?.other?.dream_world?.front_default
      }
      pokemonName={pokemonInfo.data.name}
      pokemonId={pokemonInfo.data.id || 0}
      images={
        <>
          {images?.map((e) => (
            <img src={e[1]} alt={e[0]} key={e[0]} />
          ))}
        </>
      }
      color={species?.color.name}
      types={
        <>
          {pokemonInfo.data.types?.map((t) => (
            <TypePill pokemonType={t.type.name} key={t.type.name} />
          ))}
        </>
      }
      descriptionTitle={
        species?.genera.find((g) => g.language.name === "en")?.genus
      }
      description={
        <>
          {species &&
            /*
             * Unfortunatelly, the API results contain repeated data in "flavor_text_entries",
             * varying sometimes in linebreaks or missing spaces between words.
             * In the block below I try to remove linebreaks and remove duplications
             */
            Array.from(
              species.flavor_text_entries
                .filter((i) => i.language.name === "en")
                // Remove linebreaks and invalid chars
                .map((i) => i.flavor_text.replace(/\r?\n|\r|\u000c/gm, " ")) // eslint-disable-line no-control-regex
                .reduce(
                  /*
                   * As the text from the API can sometimes vary by missing spaces,
                   * I'm using the first 10 chars to differentiate the texts
                   */
                  (acc, cur) =>
                    acc.set(cur.toLowerCase().substring(0, 10), cur),
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
        </>
      }
      profile={
        <ul>
          {pokemonInfo.data.height ? (
            <li>Height: {pokemonInfo.data.height / 10}m</li>
          ) : null}
          {pokemonInfo.data.weight ? (
            <li>Weight: {pokemonInfo.data.weight / 10}kg</li>
          ) : null}
          {species?.shape.name && <li>Shape: {species?.shape.name}</li>}
          {species?.habitat?.name && <li>Habitat: {species?.habitat.name}</li>}
        </ul>
      }
      abilities={
        <ul>
          {pokemonInfo.data.abilities?.map((a) => (
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
          {pokemonInfo.data.stats?.map((s) => (
            <li key={s.stat.name}>
              {s.stat.name}: {s.base_stat}
            </li>
          ))}
        </ul>
      }
    />
  );
}

export default withLazyRedux(PokemonInfo, pokemonDetailsSlice);
