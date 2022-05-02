import React from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { actions, selectors as pokemonDetailsSelectors } from "../slice";
import { selectors as pokemonPageSelectors } from "../../pokemon-page/slice";

export function usePokemonInfo(pokemonName: string | undefined) {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(pokemonDetailsSelectors.species.isLoading);
  const isError = useAppSelector(pokemonDetailsSelectors.species.isError);

  const pokemonInfoSelectors = React.useMemo(
    () => pokemonPageSelectors.makeInfoSelectors(),
    []
  );

  const pokemonInfo = useAppSelector((state) =>
    pokemonName
      ? pokemonInfoSelectors.selectById(state, pokemonName)
      : undefined
  );

  const speciesId = useAppSelector((state) =>
    pokemonName ? pokemonInfoSelectors.speciesId(state, pokemonName) : undefined
  );

  React.useEffect(
    function fetchDetails() {
      if (!pokemonName) return;

      const promise = dispatch(actions.fetchPokemonDetails({ pokemonName }));

      return () => {
        promise.abort();
      };
    },
    [dispatch, pokemonName]
  );

  return { isLoading, isError, pokemonInfo, speciesId };
}
