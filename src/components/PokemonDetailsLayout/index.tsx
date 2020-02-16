import React from "react";
import { IPokemon } from "pokeapi-typescript";
import { LoadableResource } from "../../redux/types";
import TypePill from "../PokemonTypePill";
import LoadingSpinner from "../LoadingSpinner";
import ErrorMessage from "../ErrorMessage";
import "./style.scss";

type Props = {
  details: LoadableResource<IPokemon>;
};

export const PokemonDetailsLayout: React.FC<Props> = ({ details }) => {
  if (!details.data) return null;

  return (
    <article className="pokemon-details">
      <section className="pokemon-details__name">{details.data.name}</section>
      <section className="pokemon-details__status">
        {details.loading && <LoadingSpinner />}
        {details.error && <ErrorMessage message={details.error} />}
      </section>
      <section className="pokemon-details__images">
        {Object.entries(details.data.sprites)
          .filter(e => e[1])
          .map(e => (
            <img src={e[1]} alt={e[0]} />
          ))}
      </section>
      <section className="pokemon-details__types">
        {details.data.types.map(t => (
          <TypePill pokemonType={t.type.name} key={t.type.name} />
        ))}
      </section>
    </article>
  );
};

export default PokemonDetailsLayout;
