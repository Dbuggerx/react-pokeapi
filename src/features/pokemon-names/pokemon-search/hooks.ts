import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { pokemonDetailsRoute } from "../../../pages/routes";
import { useAppSelector } from "../../../redux/hooks";
import { actions } from "../slice";

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
  const navigate = useNavigate();
  const filterState = useAppSelector((state) => state.filteredPokemonNames);

  return () => {
    if (filterState.name.trim().length > 0)
      navigate(pokemonDetailsRoute.generate(filterState.name));
  };
}

export function useFilterState() {
  return useAppSelector((state) => state.filteredPokemonNames);
}
