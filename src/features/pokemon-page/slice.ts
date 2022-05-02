import type { EntityState } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import type { LoadableResource } from "../../redux/types";
import type { PokemonInfo, PokemonPageItem } from "./types";
import type { RootState } from "../../redux/store";
import * as thunks from "./thunks";
import { getPaginationInfo } from "./service";

const pokemonListEntityAdapter = createEntityAdapter<PokemonPageItem>({
  selectId: (pokemon) => pokemon.name,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const pokemonInfoEntityAdapter = createEntityAdapter<
  LoadableResource<PokemonInfo>
>({
  selectId: (pokemon) => pokemon.data.name,
  sortComparer: (a, b) =>
    a.data.order && b.data.order ? a.data.order - b.data.order : 0,
});

const initialState: LoadableResource<EntityState<PokemonPageItem>> & {
  pageCount: number;
  currentPage: number;
  info: EntityState<LoadableResource<PokemonInfo>>;
  lastUrlFetched: string | null;
  nextUrl: string | null;
  prevUrl: string | null;
} = {
  loading: false,
  error: false,
  lastUrlFetched: null,
  nextUrl: null,
  prevUrl: null,
  data: pokemonListEntityAdapter.getInitialState(),
  pageCount: 0,
  currentPage: 0,
  info: pokemonInfoEntityAdapter.getInitialState(),
};

const slice = createSlice({
  name: "pokemonPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(thunks.fetchPokemonList.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(thunks.fetchPokemonList.rejected, (state, action) => {
        state.loading = false;
        state.lastUrlFetched = null;
        if (action.meta.aborted) return;
        state.error = true;
      })
      .addCase(thunks.fetchPokemonList.fulfilled, (state, action) => {
        pokemonInfoEntityAdapter.removeAll(state.info);

        state.loading = false;
        state.error = false;
        state.lastUrlFetched = action.payload.url;
        state.nextUrl = action.payload.page.next;
        state.prevUrl = action.payload.page.previous;

        pokemonListEntityAdapter.setAll(
          state.data,
          action.payload.page.results
        );

        const { pageCount, currentPage } = getPaginationInfo(
          action.payload.page.count,
          action.payload.itemsOffset,
          action.payload.pageSize
        );

        state.pageCount = pageCount;
        state.currentPage = currentPage;
      })
      .addCase(thunks.fetchPokemonInfo.pending, (state, action) => {
        pokemonInfoEntityAdapter.setOne(state.info, {
          loading: true,
          error: false,
          data: {
            name: action.meta.arg.pokemonName,
          },
        });
      })
      .addCase(thunks.fetchPokemonInfo.rejected, (state, action) => {
        if (action.meta.aborted) return;
        pokemonInfoEntityAdapter.setOne(state.info, {
          loading: false,
          error: true,
          data: {
            name: action.meta.arg.pokemonName,
          },
        });
      })
      .addCase(thunks.fetchPokemonInfo.fulfilled, (state, action) => {
        pokemonInfoEntityAdapter.setOne(state.info, {
          loading: false,
          error: false,
          data: action.payload,
        });
      });
  },
});

export default slice;

export const actions = { ...slice.actions, ...thunks };

const pokemonPageSelector = (state: RootState) => state.pokemonPage;
const pokemonListSelector = createSelector(
  pokemonPageSelector,
  (state) => state.data
);

const pokemonInfoSelector = createSelector(
  pokemonPageSelector,
  (state) => state.info
);

export const selectors = {
  list: {
    ...pokemonListEntityAdapter.getSelectors(pokemonListSelector),
    isLoading: createSelector(pokemonPageSelector, (state) => state.loading),
    isError: createSelector(pokemonPageSelector, (state) => state.error),
    nextPage: createSelector(pokemonPageSelector, (state) => state.nextUrl),
    prevPage: createSelector(pokemonPageSelector, (state) => state.prevUrl),
    currentPage: createSelector(
      pokemonPageSelector,
      (state) => state.currentPage
    ),
  },
  /***
   * When the selector is used in multiple component instances and depends on the component's props, you need to ensure that each component instance gets its own selector instance
   * @see https://react-redux.js.org/api/hooks#using-memoizing-selectors
   */
  makeInfoSelectors() {
    return pokemonInfoEntityAdapter.getSelectors(pokemonInfoSelector);
  },
};
