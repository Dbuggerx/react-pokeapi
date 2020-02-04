import reducer, { actions } from "./index";
import { INamedApiResourceList, IPokemon } from "pokeapi-typescript";

describe("pokemonPage slice", () => {
  it('updates state for "fetchPage" action', () => {
    const resultingState = reducer(undefined, actions.fetchPage());

    expect(resultingState).toEqual({
      loading: true,
      page: undefined,
      pageNumber: 0
    });
  });

  it('updates state for "pageFetched" action', () => {
    const apiResult: INamedApiResourceList<IPokemon> = {
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

    const resultingState = reducer(
      undefined,
      actions.pageFetched({
        page: apiResult,
        size: 2,
        offset: 4
      })
    );

    expect(resultingState).toEqual({
      loading: false,
      pageNumber: 3,
      page: apiResult
    });
  });

  it('updates state for "setError" action', () => {
    const resultingState = reducer(
      undefined,
      actions.setError("testing error")
    );

    expect(resultingState).toEqual({
      page: undefined,
      pageNumber: 0,
      loading: false,
      error: "testing error"
    });
  });
});
