import React, { FC } from "react";
import "./style.scss";

type Props = {
  pokemonName: string;
  pokemonId: number;
  images: React.ReactElement;
  color: string | undefined;
  types: React.ReactElement;
  descriptionTitle: string | undefined;
  description: React.ReactElement;
  profile: React.ReactElement;
  abilities: React.ReactElement;
  stats: React.ReactElement;
  backgroundImageUrl: string | undefined;
};

export const PokemonDetailsLayout: FC<Props> = props => {
  let classModifier = "";

  switch (props.color) {
    case "black":
      classModifier = "pokemon-details--black";
      break;
    case "blue":
      classModifier = "pokemon-details--blue";
      break;
    case "brown":
      classModifier = "pokemon-details--brown";
      break;
    case "gray":
      classModifier = "pokemon-details--gray";
      break;
    case "green":
      classModifier = "pokemon-details--green";
      break;
    case "pink":
      classModifier = "pokemon-details--pink";
      break;
    case "purple":
      classModifier = "pokemon-details--purple";
      break;
    case "red":
      classModifier = "pokemon-details--red";
      break;
    case "white":
      classModifier = "pokemon-details--white";
      break;
    case "yellow":
      classModifier = "pokemon-details--yellow";
      break;
  }

  return (
    <div className={`pokemon-details ${classModifier}`}>
      <article className="pokemon-details__content">
        <header className="pokemon-details__header">
          {props.pokemonName}
          <aside title="Pokemon ID">#{props.pokemonId}</aside>
        </header>
        <section className="pokemon-details__images">{props.images}</section>
        <section className="pokemon-details__types">{props.types}</section>
        <section className="pokemon-details__description">
          <div className="pokemon-details__section-title">{props.descriptionTitle}</div>
          <div className="pokemon-details__descrition-text">{props.description}</div>
        </section>
        <section className="pokemon-details__profile">
          <div className="pokemon-details__section-title">Profile</div>
          {props.profile}
        </section>
        <section className="pokemon-details__abilities">
          <div className="pokemon-details__section-title">Abilities</div>
          {props.abilities}
        </section>
        <section className="pokemon-details__stats">
          <div className="pokemon-details__section-title">Stats</div>
          {props.stats}
        </section>
        <div
          className="pokemon-details__background"
          style={{ backgroundImage: `url(${props.backgroundImageUrl})` }}
        ></div>
      </article>
    </div>
  );
};

export default PokemonDetailsLayout;
