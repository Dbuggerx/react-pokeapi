import React from "react";
import { IPokemon } from "pokeapi-typescript";
import { LoadableResource } from "../../redux/pokemonPage/slice";
import PokemonListItem from "../pokemonListItem";
import "./style.scss";

type Props = {
  pokemons: {
    pokemonName: string;
    details: LoadableResource<IPokemon> | undefined;
  }[];
};

export const PokemonList: React.FC<Props> = props => {
  return (
    <article className="pokemon-list">
      {props.pokemons.map(p => (
        <PokemonListItem {...p} key={p.pokemonName} />
      ))}
    </article>
  );
};

export default PokemonList;
