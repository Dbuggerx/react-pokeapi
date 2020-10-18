import type {
  INamedApiResource,
  IPokemon,
  IPokemonSpecies,
  IPokemonSprites
} from "pokeapi-typescript";
import reducer, { actions } from "./index";

describe("pokemonData slice", () => {
  it('updates state for "fetchData" action', () => {
    const currentState = {
      error: "test",
      loading: false,
      data: undefined,
      species: { error: "test", loading: false, data: undefined }
    };

    const resultingState = reducer(
      currentState,
      actions.fetchData({
        name: "test"
      })
    );

    expect(resultingState).toEqual({
      loading: true,
      error: undefined,
      species: {
        loading: false,
        error: undefined,
        data: undefined
      }
    });
  });

  it('updates state for "fetchSpecies" action', () => {
    const currentState = {
      error: "test",
      loading: false,
      data: { id: 123 } as IPokemon,
      species: { error: "test", loading: false, data: undefined }
    };

    const resultingState = reducer(currentState, actions.fetchSpecies("test"));

    expect(resultingState).toEqual({
      ...currentState,
      species: {
        loading: true,
        error: undefined,
        data: undefined
      }
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
      sprites: {} as IPokemonSprites,
      species: {} as INamedApiResource<IPokemonSpecies>,
      stats: [],
      types: []
    };

    const resultingState = reducer(undefined, actions.dataFetched(apiResult));

    expect(resultingState).toEqual({
      loading: false,
      data: apiResult,
      species: {
        loading: false,
        error: undefined,
        data: undefined
      }
    });
  });

  it('updates state for "speciesFetched" action', () => {
    const apiResult = {
      id: 123
    } as IPokemonSpecies;

    const resultingState = reducer(
      undefined,
      actions.speciesFetched(apiResult)
    );

    expect(resultingState).toEqual({
      data: undefined,
      error: undefined,
      loading: false,
      species: {
        loading: false,
        error: undefined,
        data: apiResult
      }
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
        sprites: {} as IPokemonSprites,
        species: {} as INamedApiResource<IPokemonSpecies>,
        stats: [],
        types: []
      },
      species: {
        loading: true,
        error: "species error",
        data: {} as IPokemonSpecies
      }
    };
    const resultingState = reducer(currentState, actions.clearData());

    expect(resultingState.loading).toBeFalsy();
    expect(resultingState.data).toBeUndefined();
    expect(resultingState.error).toBeUndefined();

    expect(resultingState.species.loading).toBeFalsy();
    expect(resultingState.species.data).toBeUndefined();
    expect(resultingState.species.error).toBeUndefined();
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
        sprites: {} as IPokemonSprites,
        species: {} as INamedApiResource<IPokemonSpecies>,
        stats: [],
        types: []
      },
      species: { error: "test", loading: true, data: undefined }
    };

    const resultingState = reducer(
      currentState,
      actions.setError("testing error")
    );

    expect(resultingState).toEqual({
      data: undefined,
      loading: false,
      error: "testing error",
      species: currentState.species
    });
  });

  it('updates state for "setSpeciesError" action', () => {
    const currentState = {
      loading: true,
      error: undefined,
      data: {
        id: 123
      } as IPokemon,
      species: { error: undefined, loading: true, data: undefined }
    };

    const resultingState = reducer(
      currentState,
      actions.setSpeciesError("testing error")
    );

    expect(resultingState).toEqual({
      ...currentState,
      species: {
        loading: false,
        data: undefined,
        error: "testing error"
      }
    });
  });
});
