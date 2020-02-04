import reducer, { actions } from "./index";

describe("filteredPokemonNames slice", () => {
  describe('updates state for "search" action', () => {
    test("for provided parameter", () => {
      expect(reducer(undefined, actions.search("char"))).toEqual([
        "Charizard",
        "Charjabug",
        "Charmander",
        "Charmeleon"
      ]);

      expect(reducer(undefined, actions.search("Bl"))).toEqual([
        "Blacephalon",
        "Blastoise",
        "Blaziken",
        "Blissey",
        "Blitzle"
      ]);
    });

    test("without any parameter", () => {
      expect(reducer(undefined, actions.search()).length).toBe(809);
    });
  });
});
