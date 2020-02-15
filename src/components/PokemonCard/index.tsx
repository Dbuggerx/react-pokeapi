import React from "react";
import { IPokemon } from "pokeapi-typescript";
import { LoadableResource } from "../../redux/pokemonPage/slice";
import TypePill from "../PokemonTypePill";
import LoadingSpinner from "../LoadingSpinner";
import ErrorMessage from "../ErrorMessage";
import "./style.scss";

type Props = {
  pokemonName: string;
  details: LoadableResource<IPokemon> | undefined;
  onClick: () => void;
};

const PokemonImage: React.FC<{ images: IPokemon["sprites"] | undefined }> = ({
  images
}) => {
  if (!images) return null;
  const imageSrc = images.front_default || Object.entries(images).filter(e => e[1])[0][1];
  return imageSrc && <img src={imageSrc} />;
};

export const PokemonCard: React.FC<Props> = props => {
  return (
    <section className="pokemon-item" onClick={props.onClick}>
      <div className="pokemon-item__name">{props.pokemonName}</div>
      <div className="pokemon-item__types">
        {props.details?.data?.types.map(t => (
          <TypePill pokemonType={t.type.name} key={t.type.name} />
        ))}
      </div>
      <div className="pokemon-item__image">
        <PokemonImage images={props.details?.data?.sprites} />
      </div>
      <div className="pokemon-item__status">
        {props.details?.loading && <LoadingSpinner />}
        {props.details?.error && <ErrorMessage message={props.details.error} />}
      </div>
    </section>
  );
};

export default PokemonCard;
