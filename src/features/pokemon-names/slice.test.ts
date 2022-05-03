import slice, { actions } from "./slice";

describe("filteredPokemonNames slice", () => {
  describe('action "updateSuggestions" updates state', () => {
    test("for provided parameter", () => {
      expect(
        slice.reducer(undefined, actions.updateSuggestions("char"))
      ).toEqual({
        name: "char",
        suggestions: ["charizard", "charjabug", "charmander", "charmeleon"],
      });

      expect(slice.reducer(undefined, actions.updateSuggestions("Bl"))).toEqual(
        {
          name: "Bl",
          suggestions: [
            "blacephalon",
            "blastoise",
            "blaziken",
            "blipbug",
            "blissey",
            "blitzle",
          ],
        }
      );
    });

    test("without any parameter", () => {
      const resultingState = slice.reducer(
        undefined,
        actions.updateSuggestions()
      );
      expect(resultingState.name).toEqual("");
      expect(resultingState.suggestions).toHaveLength(0);
    });
  });
});
