import React from "react";
import "./style.scss";

type Props = {
  pokemonName: string;
  pokemonId: number;
  images: React.ReactElement;
  mainType: string | undefined;
  types: React.ReactElement;
  descriptionTitle: string | undefined;
  description: React.ReactElement;
  profile: React.ReactElement;
  abilities: React.ReactElement;
  stats: React.ReactElement;
};

export const PokemonDetailsLayout: React.FC<Props> = props => {
  let classModifier = "";

  switch (props.mainType) {
    case "fighting":
      classModifier = "pokemon-details--fighting";
      break;
    case "flying":
      classModifier = "pokemon-details--flying";
      break;
    case "poison":
      classModifier = "pokemon-details--poison";
      break;
    case "ground":
      classModifier = "pokemon-details--ground";
      break;
    case "rock":
      classModifier = "pokemon-details--rock";
      break;
    case "bug":
      classModifier = "pokemon-details--bug";
      break;
    case "ghost":
      classModifier = "pokemon-details--ghost";
      break;
    case "steel":
      classModifier = "pokemon-details--steel";
      break;
    case "fire":
      classModifier = "pokemon-details--fire";
      break;
    case "water":
      classModifier = "pokemon-details--water";
      break;
    case "grass":
      classModifier = "pokemon-details--grass";
      break;
    case "electric":
      classModifier = "pokemon-details--electric";
      break;
    case "psychic":
      classModifier = "pokemon-details--psychic";
      break;
    case "ice":
      classModifier = "pokemon-details--ice";
      break;
    case "dragon":
      classModifier = "pokemon-details--dragon";
      break;
    case "dark":
      classModifier = "pokemon-details--dark";
      break;
    case "fairy":
      classModifier = "pokemon-details--fairy";
      break;
    case "unknown":
      classModifier = "pokemon-details--unknown";
      break;
    case "shadow":
      classModifier = "pokemon-details--shadow";
      break;
  }

  return (
    <article className={`pokemon-details ${classModifier}`}>
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
    </article>
  );
};

export default PokemonDetailsLayout;
