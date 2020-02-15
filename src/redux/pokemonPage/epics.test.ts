import { TestScheduler } from 'rxjs/testing';
import epics from './epics';
import { actions } from './index';
import { ActionsObservable } from 'redux-observable';

describe('pokemonPage epics', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  describe('from "fetchPage" to "pageFetched" and "fetchDetails"', () => {
    describe('chains actions', () => {
      const apiResult = {
        count: 6,
        next: 'next-url',
        previous: 'prev-url',
        results: [
          {
            name: 'aaa',
            url: 'aaa-url'
          },
          {
            name: 'bbb',
            url: 'bbb-url'
          }
        ]
      };

      const marbles = {
        inputAction: '-a-------',
        apiResult: '  --a|     ',
        output: '     ---(abc)-'
      };

      test('for default url', () => {
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
            a: actions.pageFetched({ page: apiResult, size: 111, offset: 222 }),
            b: actions.fetchDetails('aaa'),
            c: actions.fetchDetails('bbb')
          });
        });
      });

      test('for provided url', () => {
        testScheduler.run(({ hot, cold, expectObservable }) => {
          const action$ = new ActionsObservable(
            hot(marbles.inputAction, {
              a: actions.fetchPage({
                url: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=40'
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
            a: actions.pageFetched({ page: apiResult, size: 80, offset: 20 }),
            b: actions.fetchDetails('aaa'),
            c: actions.fetchDetails('bbb')
          });
        });
      });
    });

    it('handles error', () => {
      testScheduler.run(({ hot, cold, expectObservable }) => {
        const marbles = {
          inputAction: '-a---',
          apiResult: '  --#  ',
          output: '     ---a-'
        };

        const action$ = new ActionsObservable(
          hot(marbles.inputAction, {
            a: actions.fetchPage({ size: 111, offset: 222 })
          })
        );

        const state$ = null;
        const dependencies = {
          observableFetch: () =>
            cold<Error>(marbles.apiResult, undefined, new Error('testing error'))
        };

        const output$ = epics(action$, state$, dependencies);

        expectObservable(output$).toBe(marbles.output, {
          a: actions.setError('testing error')
        });
      });
    });
  });

  describe('from "fetchDetails" to "detailsFetched"', () => {
    it('chains actions', () => {
      const apiResult = {
        id: 123,
        name: 'test',
        base_experience: 1,
        height: 2,
        is_default: false,
        order: 3,
        weight: 4,
        abilities: [],
        forms: [],
        game_indices: [],
        held_items: [],
        location_area_encounters: '',
        moves: [],
        sprites: null,
        species: null,
        stats: [],
        types: []
      };

      const marbles = {
        inputAction: '-a---',
        apiResult: '  --a| ',
        output: '     ---a-'
      };

      testScheduler.run(({ hot, cold, expectObservable }) => {
        const action$ = new ActionsObservable(
          hot(marbles.inputAction, {
            a: actions.fetchDetails('Test')
          })
        );

        const dependencies = {
          observableFetch: (url: string) =>
            url.includes('test')
              ? cold(marbles.apiResult, {
                  a: apiResult
                })
              : undefined
        };

        const output$ = epics(action$, null, dependencies);

        expectObservable(output$).toBe(marbles.output, {
          a: actions.detailsFetched({
            pokemonName: 'Test',
            data: apiResult
          })
        });
      });
    });

    it('handles error', () => {
      testScheduler.run(({ hot, cold, expectObservable }) => {
        const marbles = {
          inputAction: '-a---',
          apiResult: '  --#  ',
          output: '     ---a-'
        };

        const action$ = new ActionsObservable(
          hot(marbles.inputAction, {
            a: actions.fetchDetails('Test')
          })
        );

        const state$ = null;
        const dependencies = {
          observableFetch: () =>
            cold<Error>(marbles.apiResult, undefined, new Error('testing error'))
        };

        const output$ = epics(action$, state$, dependencies);

        expectObservable(output$).toBe(marbles.output, {
          a: actions.setDetailsError({
            pokemonName: 'Test',
            error: 'testing error'
          })
        });
      });
    });
  });
});
