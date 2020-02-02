import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../redux/pokemonPage";

export function usePokemonPageEffects() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(
      actions.fetchPage({
        offset: 0,
        size: 10
      })
    );
  }, [dispatch]);
}
