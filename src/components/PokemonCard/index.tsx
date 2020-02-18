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
  const backgroundImageUrl = props.details?.data?.sprites && Object.entries(props.details?.data?.sprites).filter(e => e[1])[0][1];
  return (
    <section className="pokemon-card" onClick={props.onClick} >
      <svg viewBox="0 0 50 50" className="pokemon-card__curved-text">
        <defs>
          <path
            id="circlePath"
            d="M 0, 25
            a 25,25 0 1,1 50,0"
          />
        </defs>

        <text textAnchor="middle">
          <textPath xlinkHref="#circlePath" startOffset="50%">
            {props.pokemonName}
          </textPath>
        </text>
      </svg>

      <div className="pokemon-card__status">
        <ResourceState state={props.details} />
      </div>
      <div className="pokemon-card__image">
        <PokemonImage images={props.details?.data?.sprites} alt={props.pokemonName} />
      </div>
      <div className="pokemon-card__types">
        {props.details?.data?.types.map(t => (
          <TypePill compact pokemonType={t.type.name} key={t.type.name} />
        ))}
      </div>
      <div className="pokemon-card__background" style={{backgroundImage: `url(${backgroundImageUrl})`}}></div>
    </section>
  );
};

export default PokemonCard;
