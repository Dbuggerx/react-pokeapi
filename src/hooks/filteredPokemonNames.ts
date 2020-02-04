import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../redux/filteredPokemonNames";

export function useFilteredPokemonNamesEffect() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.search());
  }, [dispatch]);
}
