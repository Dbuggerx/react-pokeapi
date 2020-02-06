import React from "react";
import { useDispatch } from "react-redux";
import { actions as pokemonDataActions } from "../../redux/pokemonData";

const PokemonList: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(pokemonDataActions.clearData());
  }, [dispatch]);

  return <div>Pokemon list</div>;
};

export default PokemonList;
