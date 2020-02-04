import { TestScheduler } from "rxjs/testing";
import epics from "./epics";
import { actions } from "./index";
import { ActionsObservable } from "redux-observable";

describe("pokemonData epics", () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  describe('from "fetchData" to "dataFetched"', () => {
    describe("chains actions", () => {
      const apiResult = {
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

      const marbles = {
        inputAction: "-a---",
        apiResult: "  --a| ",
        output: "     ---a-"
      };

      test("for provided url", () => {
        testScheduler.run(({ hot, cold, expectObservable }) => {
          const action$ = new ActionsObservable(
            hot(marbles.inputAction, {
              a: actions.fetchData({ url: "the-pokemon-url" })
            })
          );

          const dependencies = {
            observableFetch: (url: string) =>
              url === "the-pokemon-url"
                ? cold(marbles.apiResult, {
                    a: apiResult
                  })
                : undefined
          };

          const output$ = epics(action$, null, dependencies);

          expectObservable(output$).toBe(marbles.output, {
            a: actions.dataFetched(apiResult)
          });
        });
      });

      test("for pokemon name", () => {
        testScheduler.run(({ hot, cold, expectObservable }) => {
          const action$ = new ActionsObservable(
            hot(marbles.inputAction, {
              a: actions.fetchData({ name: "test" })
            })
          );

          const dependencies = {
            observableFetch: (url: string) =>
              url.includes("test")
                ? cold(marbles.apiResult, {
                    a: apiResult
                  })
                : undefined
          };

          const output$ = epics(action$, null, dependencies);

          expectObservable(output$).toBe(marbles.output, {
            a: actions.dataFetched(apiResult)
          });
        });
      });
    });

    it("handles error", () => {
      testScheduler.run(({ hot, cold, expectObservable }) => {
        const marbles = {
          inputAction: "-a---",
          apiResult: "  --#  ",
          output: "     ---a-"
        };

        const action$ = new ActionsObservable(
          hot(marbles.inputAction, {
            a: actions.fetchData({ id: 123 })
          })
        );

        const state$ = null;
        const dependencies = {
          observableFetch: () =>
            cold<Error>(
              marbles.apiResult,
              undefined,
              new Error("testing error")
            )
        };

        const output$ = epics(action$, state$, dependencies);

        expectObservable(output$).toBe(marbles.output, {
          a: actions.setError("testing error")
        });
      });
    });
  });
});
