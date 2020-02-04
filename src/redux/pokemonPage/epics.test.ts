import { TestScheduler } from "rxjs/testing";
import epics from "./epics";
import { actions } from "./index";
import { ActionsObservable } from "redux-observable";

describe("pokemonPage epics", () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  describe('from "fetchPage" to "pageFetched"', () => {
    describe("chains actions", () => {
      const apiResult = {
        count: 6,
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

      const marbles = {
        inputAction: "-a---",
        apiResult: "  --a| ",
        output: "     ---a-"
      };

      test("for default url", () => {
        testScheduler.run(({ hot, cold, expectObservable }) => {
          const action$ = new ActionsObservable(
            hot(marbles.inputAction, {
              a: actions.fetchPage({ size: 111, offset: 222 })
            })
          );

          const dependencies = {
            observableFetch: () =>
              cold(marbles.apiResult, {
                a: apiResult
              })
          };

          const output$ = epics(action$, null, dependencies);

          expectObservable(output$).toBe(marbles.output, {
            a: actions.pageFetched({ page: apiResult, size: 111, offset: 222 })
          });
        });
      });

      test("for provided url", () => {
        testScheduler.run(({ hot, cold, expectObservable }) => {
          const action$ = new ActionsObservable(
            hot(marbles.inputAction, {
              a: actions.fetchPage({
                url: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=40"
              })
            })
          );

          const dependencies = {
            observableFetch: () =>
              cold(marbles.apiResult, {
                a: apiResult
              })
          };

          const output$ = epics(action$, null, dependencies);

          expectObservable(output$).toBe(marbles.output, {
            a: actions.pageFetched({ page: apiResult, size: 40, offset: 20 })
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
            a: actions.fetchPage({ size: 111, offset: 222 })
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
