import reducer, { actions } from "./index";

describe("filteredPokemonNames slice", () => {
  describe('updates state for "search" action', () => {
    test("for provided parameter", () => {
      expect(reducer(undefined, actions.search("char"))).toEqual({
        name: "char",
        suggestions: ["Charizard", "Charjabug", "Charmander", "Charmeleon"]
      });

      expect(reducer(undefined, actions.search("Bl"))).toEqual({
        name: "Bl",
        suggestions: [
          "Blacephalon",
          "Blastoise",
          "Blaziken",
          "Blissey",
          "Blitzle"
        ]
      });
    });

    test("without any parameter", () => {
      const resultingState = reducer(undefined, actions.search());
      expect(resultingState.name).toEqual("");
      expect(resultingState.suggestions).toHaveLength(809);
    });
  });
});
