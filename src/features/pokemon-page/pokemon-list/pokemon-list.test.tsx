import {
  render,
  screen,
  waitForElementToBeRemoved,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import { setupServer } from "msw/node";
import PokemonList from ".";
import {
  errorPokemonPageHandler,
  regularPokemonInfoHandler,
  regularPokemonPageHandler,
} from "./msw-handlers";
import { buildStore } from "../../../redux/store";
import { Provider } from "react-redux";

const server = setupServer(
  regularPokemonPageHandler,
  regularPokemonInfoHandler
);

describe("Pokemon list component", () => {
  beforeAll(() => {
    server.listen({ onUnhandledRequest: "error" });
  });
  afterAll(() => {
    server.close();
  });
  function setup() {
    const store = buildStore();

    render(
      <Provider store={store}>
        <PokemonList />
      </Provider>
    );
  }

  it("displays the loading indicator", () => {
    setup();
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("displays the correct page number", async () => {
    setup();
    await waitForElementToBeRemoved(screen.queryByText(/loading/i));

    expect(screen.getByText(/page:/i)).toHaveTextContent(/^Page: 1$/);
  });

  it("does not display error message", () => {
    setup();
    expect(screen.queryByText(/error/i)).toBeNull();
  });

  it("displays the items", async () => {
    setup();
    await waitForElementToBeRemoved(screen.queryByText(/loading/i));

    await waitFor(() => {
      const itemsContent = screen
        .getAllByRole("listitem")
        .map((i) => i.textContent);

      expect(itemsContent).toEqual([
        "result 0",
        "result 1",
        "result 2",
        "result 3",
        "result 4",
        "result 5",
        "result 6",
        "result 7",
        "result 8",
        "result 9",
      ]);
    });
  });

  it("goes to the next page", async () => {
    setup();

    await waitForElementToBeRemoved(screen.queryByText(/loading/i));
    fireEvent.click(
      screen.getByRole("button", {
        name: /next/i,
      })
    );

    await waitFor(() => {
      const itemsContent = screen
        .getAllByRole("listitem")
        .map((i) => i.textContent);

      expect(itemsContent).toEqual([
        "result 10",
        "result 11",
        "result 12",
        "result 13",
        "result 14",
        "result 15",
        "result 16",
        "result 17",
        "result 18",
        "result 19",
      ]);
    });
  });

  describe("server errors", () => {
    beforeAll(() => {
      server.use(errorPokemonPageHandler);
    });

    it("displays error message", async () => {
      setup();
      await waitForElementToBeRemoved(screen.queryByText(/loading/i));

      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });
});
