import type {
  INamedApiResource,
  INamedApiResourceList,
  IPokemon,
  IPokemonSpecies,
  IPokemonSprites
} from "pokeapi-typescript";
import reducer, { actions } from "./index";
import type { InitialState } from "./slice";

describe("pokemonPage slice", () => {
  describe("page data", () => {
    it('updates state for "fetchPage" action', () => {
      const currentState = {
        loading: false,
        error: "error",
        pageCount: 111,
        currentPage: 1,
        data: {
          count: 10,
          previous: "",
          next: "",
          results: [{ name: "aaa", url: "http://aaa.com" }]
        },
        details: { aaa: { loading: true, error: undefined, data: undefined } }
      };

      const resultingState = reducer(
        currentState,
        actions.fetchPage({
          size: 10,
          offset: 10
        })
      );

      expect(resultingState.details).not.toBe(currentState.details);

      expect(resultingState).toEqual({
        loading: true,
        data: undefined,
        error: undefined,
        pageCount: 111,
        currentPage: 1,
        details: {}
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
        details: {}
      });
    });

    it('updates state for "setError" action', () => {
      const resultingState = reducer(
        undefined,
        actions.setError("testing error")
      );

      expect(resultingState).toEqual({
        data: undefined,
        pageCount: 0,
        currentPage: 0,
        loading: false,
        error: "testing error",
        details: {}
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
        details: {}
      };
    });

    it('updates state for "fetchDetails" action', () => {
      const resultingState = reducer(currentState, actions.fetchDetails("aaa"));

      expect(resultingState.details).not.toBe(currentState.details);

      expect(resultingState).toEqual({
        ...currentState,
        details: {
          aaa: { loading: true, error: undefined, data: undefined }
        }
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
        details: {
          aaa: { loading: false, error: "testing error", data: undefined }
        }
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
        sprites: {} as IPokemonSprites,
        species: {} as INamedApiResource<IPokemonSpecies>,
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
        details: { aaa: { loading: false, error: undefined, data: apiResult } }
      });
    });
  });
});
