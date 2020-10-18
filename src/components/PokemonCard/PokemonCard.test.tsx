import { render } from "@testing-library/react";
import React from "react";
import PokemonCard from "./";
import mock from "./mock";

describe("PokemonCard", () => {
  const onClickMock = jest.fn();

  const doRender = (loading = false, error: string | undefined = undefined) =>
    render(
      <PokemonCard
        pokemonName="pokemonTest"
        details={{ loading, error, data: mock }}
        onClick={onClickMock}
      />
    );

  beforeEach(() => {
    onClickMock.mockClear();
  });

  it("displays the pokemon name", async () => {
    const { getByTestId } = doRender();
    expect(getByTestId("pokemon-name")).toHaveTextContent(/^pokemonTest$/);
  });

  it("displays the pokemon image", async () => {
    const { getByTestId } = doRender();
    expect(getByTestId("pokemon-image")).toHaveAttribute(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    );
  });

  describe("loading", () => {
    it("displays the loading indicator", async () => {
      const { getByTestId } = doRender(true);
      expect(getByTestId("loading")).toBeInTheDocument();
    });

    it("does not display the loading indicator", async () => {
      const { queryByTestId } = doRender(false);
      expect(queryByTestId("loading")).not.toBeInTheDocument();
    });
  });
  describe("error", () => {
    it("displays the error message", async () => {
      const { getByTestId } = doRender(false, "test");
      expect(getByTestId("error")).toHaveTextContent(/^test$/);
    });

    it("does not display the loading indicator", async () => {
      const { queryByTestId } = doRender(false, undefined);
      expect(queryByTestId("error")).not.toBeInTheDocument();
    });
  });
});
