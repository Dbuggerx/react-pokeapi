import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faFistRaised,
  faDove,
  faSkullCrossbones,
  faMountain,
  faGem,
  faBug,
  faGhost,
  faSeedling,
  faFire,
  faTint,
  faBolt,
  faDumbbell,
  faHatWizard,
  faIcicles,
  faDragon,
  faCircle,
  faMagic,
  faQuestionCircle,
  faMehBlank,
  faDotCircle
} from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import { FC } from "react";

type Props = {
  pokemonType: string;
  compact?: boolean;
};

const PokemonTypePill: FC<Props> = ({ pokemonType, compact }) => {
  let icon: IconDefinition | null = null;
  let classModifier = "";

  switch (pokemonType) {
    case "fighting":
      icon = faFistRaised;
      classModifier = "pokemon-type-pill--fighting";
      break;
    case "flying":
      icon = faDove;
      classModifier = "pokemon-type-pill--flying";
      break;
    case "poison":
      icon = faSkullCrossbones;
      classModifier = "pokemon-type-pill--poison";
      break;
    case "ground":
      icon = faMountain;
      classModifier = "pokemon-type-pill--ground";
      break;
    case "rock":
      icon = faGem;
      classModifier = "pokemon-type-pill--rock";
      break;
    case "bug":
      icon = faBug;
      classModifier = "pokemon-type-pill--bug";
      break;
    case "ghost":
      icon = faGhost;
      classModifier = "pokemon-type-pill--ghost";
      break;
    case "steel":
      icon = faDumbbell;
      classModifier = "pokemon-type-pill--steel";
      break;
    case "fire":
      icon = faFire;
      classModifier = "pokemon-type-pill--fire";
      break;
    case "water":
      icon = faTint;
      classModifier = "pokemon-type-pill--water";
      break;
    case "grass":
      icon = faSeedling;
      classModifier = "pokemon-type-pill--grass";
      break;
    case "electric":
      icon = faBolt;
      classModifier = "pokemon-type-pill--electric";
      break;
    case "psychic":
      icon = faHatWizard;
      classModifier = "pokemon-type-pill--psychic";
      break;
    case "ice":
      icon = faIcicles;
      classModifier = "pokemon-type-pill--ice";
      break;
    case "dragon":
      icon = faDragon;
      classModifier = "pokemon-type-pill--dragon";
      break;
    case "dark":
      icon = faCircle;
      classModifier = "pokemon-type-pill--dark";
      break;
    case "fairy":
      icon = faMagic;
      classModifier = "pokemon-type-pill--fairy";
      break;
    case "unknown":
      icon = faQuestionCircle;
      classModifier = "pokemon-type-pill--unknown";
      break;
    case "shadow":
      icon = faMehBlank;
      classModifier = "pokemon-type-pill--shadow";
      break;
    default:
      icon = faDotCircle;
  }
  return (
    <div
      className={`pokemon-type-pill ${
        compact ? "pokemon-type-pill--compact" : ""
      } ${classModifier}`}
      title={compact ? pokemonType : undefined}
    >
      {icon && (
        <div className="pokemon-type-pill__icon">
          <FontAwesomeIcon icon={icon} />
        </div>
      )}
      {!compact && pokemonType}
    </div>
  );
};

export default PokemonTypePill;
