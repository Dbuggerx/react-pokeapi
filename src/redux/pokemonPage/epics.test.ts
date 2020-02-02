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
    it("chains actions", () => {
      testScheduler.run(({ hot, cold, expectObservable }) => {
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

        const action$ = new ActionsObservable(
          hot(marbles.inputAction, {
            a: actions.fetchPage({ size: 111, offset: 222 })
          })
        );

        const state$ = null;
        const dependencies = {
          observableFetch: () =>
            cold(marbles.apiResult, {
              a: apiResult
            })
        };

        const output$ = epics(action$, state$, dependencies);

        expectObservable(output$).toBe(marbles.output, {
          a: actions.pageFetched({ page: apiResult, size: 111, offset: 222 })
        });
      });
    });

    it("handles error", () => {
      testScheduler.run(({ hot, cold, expectObservable }) => {
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
