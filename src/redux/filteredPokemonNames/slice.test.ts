import reducer, { actions } from "./index";
import { IPokemon } from "pokeapi-typescript";

describe("filteredPokemonNames slice", () => {
  it('updates state for "search" action', () => {
    expect(reducer(undefined, actions.search("char"))).toEqual([
      "Charmander",
      "Charmeleon",
      "Charizard",
      "Charjabug"
    ]);

    expect(reducer(undefined, actions.search("Bl"))).toEqual([
      "Blastoise",
      "Blissey",
      "Blaziken",
      "Blitzle",
      "Blacephalon"
    ]);
  });
});
