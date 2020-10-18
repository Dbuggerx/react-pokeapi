import type { IPokemon } from "pokeapi-typescript";
import React from "react";
import type { LoadableResource } from "../../redux/types";
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
  const imageSrc =
    // @ts-expect-error - The "other" property is unfortunately not typed
    images.other["official-artwork"].front_default;
  return (
    imageSrc && (
      <img
        src={imageSrc}
        alt={alt}
        data-testid="pokemon-image"
        className="pokemon-card__image"
      />
    )
  );
};

export const PokemonNameSvgShape: React.FC = () => (
  <svg style={{ display: "none" }}>
    <defs>
      <path
        id="circlePath"
        d="M 0, 25
      a 25,25 0 1,1 50,0"
      />
    </defs>
  </svg>
);

export const PokemonCard: React.FC<Props> = props => {
  const backgroundImageUrl =
    // @ts-expect-error - The "other" property is unfortunately not typed
    props.details?.data?.sprites.other["official-artwork"].front_default;

  return (
    <section
      className="pokemon-card"
      onClick={props.onClick}
      data-testid="card"
    >
      <svg viewBox="0 0 50 50" className="pokemon-card__curved-text">
        <text textAnchor="middle">
          <textPath
            xlinkHref="#circlePath"
            startOffset="50%"
            data-testid="pokemon-name"
          >
            {props.pokemonName}
          </textPath>
        </text>
      </svg>
      <div className="pokemon-card__status">
        <ResourceState state={props.details} />
      </div>
      <PokemonImage
        images={props.details?.data?.sprites}
        alt={props.pokemonName}
      />
      <div className="pokemon-card__types">
        {props.details?.data?.types.map(t => (
          <TypePill compact pokemonType={t.type.name} key={t.type.name} />
        ))}
      </div>
      <div
        className="pokemon-card__background"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      ></div>
    </section>
  );
};

export default PokemonCard;
