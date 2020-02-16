import React from "react";
import { IPokemon } from "pokeapi-typescript";
import { LoadableResource } from "../../redux/types";

import LoadingSpinner from "../LoadingSpinner";
import ErrorMessage from "../ErrorMessage";
import "./style.scss";

type Props = {
  pokemonName: string;
  images: React.ReactElement;
  types: React.ReactElement;
  profile: React.ReactElement;
};

export const PokemonDetailsLayout: React.FC<Props> = props => (
  <article className="pokemon-details">
    <section className="pokemon-details__name">{props.pokemonName}</section>
    <section className="pokemon-details__images">{props.images}</section>
    <section className="pokemon-details__types">{props.types}</section>
    <section className="pokemon-details__profile">{props.profile}</section>
  </article>
);

export default PokemonDetailsLayout;
