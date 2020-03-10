import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useTypedSelector } from "../redux/types";
import { actions } from "../redux/filteredPokemonNames";
import { pokemonRoute } from "../routeManager";

export function useInitialFilterSuggestionsEffect() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.updateSuggestions());
  }, [dispatch]);
}

export function useUpdateSuggestionsCallback() {
  const dispatch = useDispatch();

  return React.useCallback(
    (filterParam: string) => {
      dispatch(actions.updateSuggestions(filterParam));
    },
    [dispatch]
  );
}

export function useChangeRouteCallback() {
  const history = useHistory();
  const filterState = useTypedSelector(state => state.filteredPokemonNames);

  return () => {
    if (filterState.name.trim().length > 0)
      history.push(pokemonRoute.generate({ pokemonName: filterState.name }));
  };
}

export function useFilterState() {
  return useTypedSelector(state => state.filteredPokemonNames);
}
