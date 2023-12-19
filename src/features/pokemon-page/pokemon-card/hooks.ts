import React from "react";
import { useAppSelector } from "../../../redux/hooks";
import { selectors } from "../slice";

export function usePokemonInfo(pokemonName: string) {
  const pokemonInfoSelectors = React.useMemo(
    () => selectors.makeInfoSelectors(),
    []
  );

  return useAppSelector((state) =>
    pokemonInfoSelectors.selectById(state, pokemonName)
  );
}
