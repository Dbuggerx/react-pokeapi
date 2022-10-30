import type { EntityId } from "@reduxjs/toolkit";
import ResourceState from "../../../components/resource-state";
import type { LoadableResource } from "../../../redux/types";
import type { PokemonInfo } from "../types";
import { usePokemonInfo } from "./hooks";
import TypePill from "../../../components/pokemon-type-pill";
import "./style.scss";

export default function PokemonCard(props: { pokemonName: EntityId }) {
  const pokemonInfo = usePokemonInfo(props.pokemonName);

  return <PokemonCardData info={pokemonInfo} {...props} />;
}

export function PokemonCardData(props: {
  pokemonName: EntityId;
  info: LoadableResource<PokemonInfo> | undefined;
}) {
  const backgroundImageUrl =
    props.info?.data?.sprites?.other?.["official-artwork"].front_default;

  return (
    <section className="pokemon-card" data-testid="card">
      <svg viewBox="0 0 50 50" className="pokemon-card__curved-text">
        <text textAnchor="middle">
          <textPath xlinkHref="#circlePath" startOffset="50%">
            {props.pokemonName}
          </textPath>
        </text>
      </svg>
      <div className="pokemon-card__status">
        <ResourceState state={props.info} />
      </div>
      <PokemonImage
        images={props.info?.data?.sprites}
        alt={props.pokemonName as string}
      />
      <div className="pokemon-card__types">
        {props.info?.data?.types?.map((t) => (
          <TypePill compact pokemonType={t.type.name} key={t.type.name} />
        ))}
      </div>
      <div
        className="pokemon-card__background"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      ></div>
    </section>
  );
}

function PokemonImage({
  images,
  alt,
}: {
  images: PokemonInfo["sprites"] | undefined;
  alt: string;
}) {
  const imageSrc = images?.other?.["official-artwork"].front_default;
  return imageSrc ? (
    <img
      src={imageSrc}
      alt={alt}
      data-testid="pokemon-image"
      className="pokemon-card__image"
    />
  ) : null;
}

export function PokemonNameSvgShape() {
  return (
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
}
