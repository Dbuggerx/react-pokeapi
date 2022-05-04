import { render, screen } from "@testing-library/react";
import PokemonCard from ".";
import { buildStore } from "../../../redux/store";
import { Provider } from "react-redux";

describe("Pokemon card component", () => {
  function setup({
    loading,
    error,
    pokemonName,
    pokemonOrder,
  }: {
    loading: boolean;
    error: boolean;
    pokemonName: string;
    pokemonOrder: number;
  }) {
    const { store } = buildStore({
      pokemonPage: {
        pageCount: 4,
        currentPage: 1,
        lastUrlFetched: null,
        nextUrl: null,
        prevUrl: null,
        loading: false,
        error: false,
        data: {
          entities: {},
          ids: [],
        },
        info: {
          entities: {
            [pokemonName]: {
              loading,
              error,
              data: {
                name: pokemonName,
                order: pokemonOrder,
              },
            },
          },
          ids: [pokemonName],
        },
      },
    });

    render(
      <Provider store={store}>
        <PokemonCard pokemonName={pokemonName} />
      </Provider>
    );
  }

  it("displays the loading indicator", () => {
    setup({
      loading: true,
      error: false,
      pokemonName: "test",
      pokemonOrder: 1,
    });

    expect(screen.getByRole("alert")).toHaveAttribute("aria-busy", "true");
  });

  it("does not display error message", () => {
    setup({
      loading: false,
      error: false,
      pokemonName: "test",
      pokemonOrder: 1,
    });
    expect(screen.queryByText(/error/i)).toBeNull();
  });

  it("displays data", async () => {
    setup({
      loading: false,
      error: false,
      pokemonName: "test",
      pokemonOrder: 10,
    });

    // eslint-disable-next-line testing-library/no-node-access
    expect(document.getElementsByTagName("textPath")![0]).toHaveTextContent(
      "test"
    );
  });

  describe("errors", () => {
    it("displays error message", async () => {
      setup({
        error: true,
        loading: false,
        pokemonName: "testing",
        pokemonOrder: 1,
      });

      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });
});
