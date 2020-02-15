import reducer, { actions } from "./index";
import { INamedApiResourceList, IPokemon } from "pokeapi-typescript";
import { LoadableResource, InitialState } from "./slice";

describe("pokemonPage slice", () => {
  describe("page data", () => {
    it('updates state for "fetchPage" action', () => {
      const resultingState = reducer(undefined, actions.fetchPage());

      expect(resultingState).toEqual({
        loading: true,
        data: undefined,
        error: undefined,
        pageCount: 0,
        currentPage: 0,
        details: new Map<string, LoadableResource<IPokemon>>()
      });
    });

    it('updates state for "pageFetched" action', () => {
      const apiResult: INamedApiResourceList<IPokemon> = {
        count: 964,
        next: "next-url",
        previous: "prev-url",
        results: [
          {
            name: "aaa",
            url: "aaa-url"
          },
          {
            name: "bbb",
            url: "bbb-url"
          }
        ]
      };

      expect(
        reducer(
          undefined,
          actions.pageFetched({
            page: apiResult,
            size: 20,
            offset: 40
          })
        )
      ).toEqual({
        error: undefined,
        loading: false,
        pageCount: 49,
        currentPage: 3,
        data: apiResult,
        details: new Map<string, LoadableResource<IPokemon>>()
      });
    });

    it('updates state for "setError" action', () => {
      const resultingState = reducer(undefined, actions.setError("testing error"));

      expect(resultingState).toEqual({
        data: undefined,
        pageCount: 0,
        currentPage: 0,
        loading: false,
        error: "testing error",
        details: new Map<string, LoadableResource<IPokemon>>()
      });
    });
  });

  describe("details data", () => {
    let currentState: InitialState;

    beforeEach(() => {
      currentState = {
        error: undefined,
        loading: false,
        pageCount: 10,
        currentPage: 3,
        data: {
          count: 100,
          next: "next-url",
          previous: "prev-url",
          results: [
            {
              name: "aaa",
              url: "aaa-url"
            },
            {
              name: "bbb",
              url: "bbb-url"
            }
          ]
        },
        details: new Map<string, LoadableResource<IPokemon>>()
      };
    });

    it('updates state for "fetchDetails" action', () => {
      const resultingState = reducer(currentState, actions.fetchDetails("aaa"));

      expect(resultingState.details).not.toBe(currentState.details);

      expect(resultingState).toEqual({
        ...currentState,
        details: new Map<string, LoadableResource<IPokemon>>([
          ["aaa", { loading: true, error: undefined, data: undefined }]
        ])
      });
    });

    it('updates state for "setDetailsError" action', () => {
      const resultingState = reducer(
        currentState,
        actions.setDetailsError({
          pokemonName: "aaa",
          error: "testing error"
        })
      );

      expect(resultingState.details).not.toBe(currentState.details);

      expect(resultingState).toEqual({
        ...currentState,
        details: new Map<string, LoadableResource<IPokemon>>([
          ["aaa", { loading: false, error: "testing error", data: undefined }]
        ])
      });
    });

    it('updates state for "detailsFetched" action', () => {
      const apiResult: IPokemon = {
        id: 123,
        name: "aaa",
        base_experience: 1,
        height: 2,
        is_default: false,
        order: 3,
        weight: 4,
        abilities: [],
        forms: [],
        game_indices: [],
        held_items: [],
        location_area_encounters: "",
        moves: [],
        sprites: null,
        species: null,
        stats: [],
        types: []
      };

      const resultingState = reducer(
        currentState,
        actions.detailsFetched({
          pokemonName: "aaa",
          data: apiResult
        })
      );

      expect(resultingState.details).not.toBe(currentState.details);

      expect(resultingState).toEqual({
        ...currentState,
        details: new Map<string, LoadableResource<IPokemon>>([
          ["aaa", { loading: false, error: undefined, data: apiResult }]
        ])
      });
    });
  });
});
