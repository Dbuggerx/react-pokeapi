import React from "react";
import { IPokemon } from "pokeapi-typescript";
import { faSpinner, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoadableResource } from "../../redux/pokemonPage/slice";
import TypePill from "../pokemonTypePill";
import "./style.scss";

type Props = {
  pokemonName: string;
  details: LoadableResource<IPokemon> | undefined;
};

const PokemonImage: React.FC<{ images: IPokemon["sprites"] | undefined }> = ({
  images
}) => {
  if (!images) return null;
  const imageSrc = images.front_default || Object.entries(images).filter(e => e[1])[0][1];
  return imageSrc && <img src={imageSrc} />;
};

export const PokemonListItem: React.FC<Props> = props => {
  return (
    <section className="pokemon-item">
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
        {props.details?.loading && (
          <div className="pokemon-item__loading">
            <FontAwesomeIcon icon={faSpinner} size="4x" />
          </div>
        )}
        {props.details?.error && (
          <div className="pokemon-item__error">
            <FontAwesomeIcon icon={faExclamationCircle} size="2x" />
            {props.details.error}
          </div>
        )}
      </div>
    </section>
  );
};

export default PokemonListItem;
