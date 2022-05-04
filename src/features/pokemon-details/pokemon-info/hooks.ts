import React from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { actions, selectors as pokemonDetailsSelectors } from "../slice";
import { selectors as pokemonPageSelectors } from "../../pokemon-page/slice";

export function usePokemonInfo(pokemonName: string | undefined) {
  const dispatch = useAppDispatch();
  const error = useAppSelector(pokemonDetailsSelectors.error);
  const pokemonInfoSelectors = React.useMemo(
    () => pokemonPageSelectors.makeInfoSelectors(),
    []
  );
  const speciesId = useAppSelector((state) =>
    pokemonName ? pokemonInfoSelectors.speciesId(state, pokemonName) : undefined
  );
  const species = useAppSelector((state) =>
    speciesId
      ? pokemonDetailsSelectors.species.selectById(state, speciesId)
      : undefined
  );

  const isSpeciesLoading = useAppSelector(
    pokemonDetailsSelectors.species.isLoading
  );
  const isSpeciesError = useAppSelector(
    pokemonDetailsSelectors.species.isError
  );

  const pokemonInfo = useAppSelector((state) =>
    pokemonName
      ? pokemonInfoSelectors.selectById(state, pokemonName)
      : undefined
  );

  const images =
    pokemonInfo?.data?.sprites &&
    Object.entries(pokemonInfo.data.sprites).filter(
      (e) => typeof e[1] === "string"
    );

  React.useEffect(
    function fetchDetails() {
      if (!pokemonName) return;

      const promise = dispatch(actions.getPokemonDetails({ pokemonName }));

      return () => {
        promise.abort();
      };
    },
    [dispatch, pokemonName]
  );

  return {
    error,
    isSpeciesLoading,
    isSpeciesError,
    pokemonInfo,
    images,
    species,
  };
}
