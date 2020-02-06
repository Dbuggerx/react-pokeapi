import reducer, { actions } from "./index";
import { INamedApiResourceList, IPokemon } from "pokeapi-typescript";

describe("pokemonPage slice", () => {
  it('updates state for "fetchPage" action', () => {
    const resultingState = reducer(undefined, actions.fetchPage());

    expect(resultingState).toEqual({
      loading: true,
      data: undefined,
      error: undefined,
      pageCount: 0,
      currentPage: 0
    });
  });

  it('updates state for "pageFetched" action', () => {
    const apiResult: INamedApiResourceList<IPokemon> = {
      count: 100,
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

    expect(
      reducer(
        undefined,
        actions.pageFetched({
          page: apiResult,
          size: 10,
          offset: 30
        })
      )
    ).toEqual({
      error: undefined,
      loading: false,
      pageCount: 10,
      currentPage: 3,
      data: apiResult
    });
  });

  it('updates state for "setError" action', () => {
    const resultingState = reducer(
      undefined,
      actions.setError("testing error")
    );

    expect(resultingState).toEqual({
      data: undefined,
      pageCount: 0,
      currentPage: 0,
      loading: false,
      error: "testing error"
    });
  });
});
