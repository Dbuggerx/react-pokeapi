import React from 'react';
import { IPokemon } from 'pokeapi-typescript';
import { LoadableResource } from '../../redux/pokemonPage/slice';

type Props = {
  pokemonName: string;
  details: LoadableResource<IPokemon> | undefined;
};

const PokemonDetails: React.FC<{
  details: LoadableResource<IPokemon>;
}> = props => {
  return (
    <>
      <p>{props.details.loading && 'Loading...'}</p>
      <ul>
        <li>
          {props.details.data &&
            props.details.data.types.map(t => <div key={t.type.name}>{t.type.name}</div>)}
        </li>
      </ul>
    </>
  );
};

const PokemonListItem: React.FC<Props> = props => {
  return (
    <div>
      <p>{props.pokemonName}</p>
      {props.details && <PokemonDetails details={props.details} />}
    </div>
  );
};

export default PokemonListItem;
