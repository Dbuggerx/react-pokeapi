import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { actions } from "../redux/pokemonData";
import { useTypedSelector } from "../redux/types";
import type { PokemonRouteParams } from "../routeManager";

export function usePokemonDataEffect() {
  const dispatch = useDispatch();
  const { pokemonName } = useParams<PokemonRouteParams>();

  React.useEffect(() => {
    dispatch(
      actions.fetchData({
        name: pokemonName.toLowerCase()
      })
    );
  }, [dispatch, pokemonName]);
}

export function usePokemonDataState() {
  return useTypedSelector(state => state.pokemonData);
}
