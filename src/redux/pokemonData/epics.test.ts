import type { IPokemonSpecies, IPokemonSprites } from "pokeapi-typescript";
import { ActionsObservable } from "redux-observable";
import { TestScheduler } from "rxjs/testing";
import epics from "./epics";
import { actions } from "./index";

describe("pokemonData epics", () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  describe('from "fetchData" to "dataFetched" and "fetchSpecies"', () => {
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
        sprites: {} as IPokemonSprites,
        species: {
          name: "species name",
          url: "species-url"
        },
        stats: [],
        types: []
      };

      const marbles = {
        inputAction: "-a------",
        apiResult: "  --a|    ",
        output: "     ---(ab)-"
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

          // @ts-ignore
          const output$ = epics(action$, null, dependencies);

          expectObservable(output$).toBe(marbles.output, {
            a: actions.dataFetched(apiResult),
            b: actions.fetchSpecies("species-url")
          });
        });
      });

      test("for pokemon name", () => {
        testScheduler.run(({ hot, cold, expectObservable }) => {
          const action$ = new ActionsObservable(
            hot(marbles.inputAction, {
              a: actions.fetchData({ name: "Test" })
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

          // @ts-ignore
          const output$ = epics(action$, null, dependencies);

          expectObservable(output$).toBe(marbles.output, {
            a: actions.dataFetched(apiResult),
            b: actions.fetchSpecies("species-url")
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
            a: actions.fetchData({ name: "test" })
          })
        );

        const dependencies = {
          observableFetch: () =>
            cold<Error>(
              marbles.apiResult,
              undefined,
              new Error("testing error")
            )
        };

        // @ts-ignore
        const output$ = epics(action$, null, dependencies);

        expectObservable(output$).toBe(marbles.output, {
          a: actions.setError("testing error")
        });
      });
    });
  });

  describe('from "fetchSpecies" to "speciesFetched"', () => {
    it("chains actions", () => {
      const apiResult = {
        id: 123
      } as IPokemonSpecies;

      const marbles = {
        inputAction: "-a---",
        apiResult: "  --a| ",
        output: "     ---a-"
      };

      testScheduler.run(({ hot, cold, expectObservable }) => {
        const action$ = new ActionsObservable(
          hot(marbles.inputAction, {
            a: actions.fetchSpecies("the-species-url")
          })
        );

        const dependencies = {
          observableFetch: (url: string) =>
            url === "the-species-url"
              ? cold(marbles.apiResult, {
                  a: apiResult
                })
              : undefined
        };

        // @ts-ignore
        const output$ = epics(action$, null, dependencies);

        expectObservable(output$).toBe(marbles.output, {
          a: actions.speciesFetched(apiResult)
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
            a: actions.fetchSpecies("the-species-url")
          })
        );

        const dependencies = {
          observableFetch: () =>
            cold<Error>(
              marbles.apiResult,
              undefined,
              new Error("testing error")
            )
        };

        // @ts-ignore
        const output$ = epics(action$, null, dependencies);

        expectObservable(output$).toBe(marbles.output, {
          a: actions.setSpeciesError("testing error")
        });
      });
    });
  });
});
