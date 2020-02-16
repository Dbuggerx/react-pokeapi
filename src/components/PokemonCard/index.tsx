import React from "react";
import { IPokemon } from "pokeapi-typescript";
import { LoadableResource } from "../../redux/types";
import TypePill from "../PokemonTypePill";
import ResourceState from "../ResourceState";
import "./style.scss";

type Props = {
  pokemonName: string;
  details: LoadableResource<IPokemon> | undefined;
  onClick: () => void;
};

const PokemonImage: React.FC<{
  images: IPokemon["sprites"] | undefined;
  alt: string;
}> = ({ images, alt }) => {
  if (!images) return null;
  const imageSrc = images.front_default || Object.entries(images).filter(e => e[1])[0][1];
  return imageSrc && <img src={imageSrc} alt={alt} />;
};

export const PokemonCard: React.FC<Props> = props => {
  return (
    <section className="pokemon-card" onClick={props.onClick}>
      <div className="pokemon-card__name">{props.pokemonName}</div>
      <div className="pokemon-card__status">
        <ResourceState state={props.details} />
      </div>
      <div className="pokemon-card__image">
        <PokemonImage images={props.details?.data?.sprites} alt={props.pokemonName} />
      </div>
      <div className="pokemon-card__types">
        {props.details?.data?.types.map(t => (
          <TypePill pokemonType={t.type.name} key={t.type.name} />
        ))}
      </div>
    </section>
  );
};

export default PokemonCard;
