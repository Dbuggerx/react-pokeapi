import reducer, { actions } from "./index";

describe("filteredPokemonNames slice", () => {
  describe('updates state for "updateSuggestions" action', () => {
    test("for provided parameter", () => {
      expect(reducer(undefined, actions.updateSuggestions("char"))).toEqual({
        name: "char",
        suggestions: ["charizard", "charjabug", "charmander", "charmeleon"]
      });

      expect(reducer(undefined, actions.updateSuggestions("Bl"))).toEqual({
        name: "Bl",
        suggestions: ["blacephalon", "blastoise", "blaziken", "blissey", "blitzle"]
      });
    });

    test("without any parameter", () => {
      const resultingState = reducer(undefined, actions.updateSuggestions());
      expect(resultingState.name).toEqual("");
      expect(resultingState.suggestions).toHaveLength(0);
    });
  });
});
