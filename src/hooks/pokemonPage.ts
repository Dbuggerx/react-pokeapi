import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { actions as pokemonDataActions } from "../redux/pokemonData";
import { actions } from "../redux/pokemonPage";
import { useTypedSelector } from "../redux/types";
import { pokemonRoute } from "../routeManager";

export function useFetchInitialPageEffect() {
  const dispatch = useDispatch();
  const pageState = useTypedSelector(state => state.pokemonPage);

  React.useEffect(() => {
    if (pageState.currentPage === 0)
      dispatch(
        actions.fetchPage({
          offset: 0,
          size: 20
        })
      );
  }, [dispatch, pageState.currentPage]);

  React.useEffect(() => {
    dispatch(pokemonDataActions.clearData());
  }, [dispatch]);
}

export function useFetchPage() {
  const dispatch = useDispatch();
  const pageState = useTypedSelector(state => state.pokemonPage);

  return {
    fetchPrevPage: () => {
      if (pageState.data?.previous)
        dispatch(
          actions.fetchPage({
            url: pageState.data.previous
          })
        );
    },
    fetchNextPage: () => {
      if (pageState.data?.next)
        dispatch(
          actions.fetchPage({
            url: pageState.data.next
          })
        );
    }
  };
}

export function usePokemonPageState() {
  return useTypedSelector(state => state.pokemonPage);
}

type HistoryState = {
  scrollTop?: number;
};

export function useGoToDetails(scrollAreaRef: React.RefObject<HTMLElement>) {
  const history = useHistory();
  const location = useLocation();

  React.useLayoutEffect(() => {
    const historyState = location?.state as HistoryState | undefined;
    if (historyState?.scrollTop)
      scrollAreaRef.current?.scrollBy(0, historyState?.scrollTop);
  }, [location, scrollAreaRef]);

  return (pokemonName: string) => {
    history.replace(location.pathname, {
      scrollTop: scrollAreaRef.current?.scrollTop
    } as HistoryState);

    history.push(pokemonRoute.generate({ pokemonName }));
  };
}
