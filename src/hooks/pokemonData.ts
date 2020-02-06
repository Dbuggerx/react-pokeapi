import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useTypedSelector } from "../redux/types";
import { actions as filteredPokemonNamesAction } from "../redux/filteredPokemonNames";

export function usePokemonDataEffects() {
  const dispatch = useDispatch();
  const history = useHistory();
  const pokemonData = useTypedSelector(state => state.pokemonData);

  React.useEffect(() => {
    dispatch(filteredPokemonNamesAction.search());
  }, [dispatch]);

  React.useEffect(() => {
    if (pokemonData.data || pokemonData.error || pokemonData.loading)
      history.push("/pokemon");
  }, [history, pokemonData]);
}

export function usePokemonData() {
  const history = useHistory();
  const pokemonData = useTypedSelector(state => state.pokemonData);
  if (!pokemonData.loading && !pokemonData.data && !pokemonData.error)
    history.push("/list");
  else return pokemonData;
}
