import reducer, { actions } from "./index";
import { IPokemon } from "pokeapi-typescript";

describe("pokemonData slice", () => {
  it('updates state for "fetchData" action', () => {
    const resultingState = reducer(
      { error: "test", loading: false, data: undefined },
      actions.fetchData()
    );

    expect(resultingState).toEqual({
      loading: true,
      error: undefined
    });
  });

  it('updates state for "dataFetched" action', () => {
    const apiResult: IPokemon = {
      id: 123,
      name: "test",
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

    const resultingState = reducer(undefined, actions.dataFetched(apiResult));

    expect(resultingState).toEqual({
      loading: false,
      data: apiResult
    });
  });

  it('updates state for "clearData" action', () => {
    const currentState = {
      loading: false,
      error: "test",
      data: {
        id: 123,
        name: "test",
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
      }
    };
    const resultingState = reducer(currentState, actions.clearData());

    expect(resultingState.data).toBeUndefined();
    expect(resultingState.error).toBeUndefined();
  });

  it('updates state for "setError" action', () => {
    const currentState = {
      loading: true,
      error: undefined,
      data: {
        id: 123,
        name: "test",
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
      }
    };

    const resultingState = reducer(
      currentState,
      actions.setError("testing error")
    );

    expect(resultingState).toEqual({
      data: undefined,
      loading: false,
      error: "testing error"
    });
  });
});
