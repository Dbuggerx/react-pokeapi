import React from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { selectors, actions } from "../slice";

export function useFetchPage() {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(selectors.list.currentPage);
  const prevPage = useAppSelector(selectors.list.prevPage);
  const nextPage = useAppSelector(selectors.list.nextPage);
  const lastPromise =
    React.useRef<{
      abort: () => void;
    }>();

  React.useEffect(
    function fetchFirstPage() {
      if (currentPage > 1) return;
      const promise = dispatch(actions.getPokemonPage({ size: 10, offset: 0 }));

      return () => {
        promise.abort();
      };
    },
    [currentPage, dispatch]
  );

  const fetchPrevPage = React.useCallback(() => {
    if (!prevPage) return;
    lastPromise.current?.abort();
    lastPromise.current = dispatch(
      actions.getPokemonPage({
        url: prevPage,
      })
    );
  }, [dispatch, prevPage]);

  const fetchNextPage = React.useCallback(() => {
    if (!nextPage) return;
    lastPromise.current?.abort();
    lastPromise.current = dispatch(
      actions.getPokemonPage({
        url: nextPage,
      })
    );
  }, [dispatch, nextPage]);

  return {
    fetchPrevPage,
    fetchNextPage,
  };
}

export function usePageData() {
  const isLoading = useAppSelector(selectors.list.isLoading);
  const isError = useAppSelector(selectors.list.isError);
  const currentPage = useAppSelector(selectors.list.currentPage);
  const pageCount = useAppSelector(selectors.list.pageCount);
  const pokemonInfoSelectors = React.useMemo(
    () => selectors.makeInfoSelectors(),
    []
  );
  const pokemonInfoIds = useAppSelector(pokemonInfoSelectors.selectIds);

  return { isLoading, isError, pokemonInfoIds, currentPage, pageCount };
}
