import {
  render,
  screen,
  waitForElementToBeRemoved,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { setupServer } from "msw/node";
import {
  errorPokemonPageHandler,
  regularPokemonInfoHandler,
  regularPokemonPageHandler,
} from "./msw-handlers";
import { buildStore } from "../../../redux/store";
import PokemonList from ".";

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
      <MemoryRouter>
        <Provider store={store}>
          <PokemonList />
        </Provider>
      </MemoryRouter>
    );
  }

  it("displays the loading indicator", () => {
    setup();
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("does not display error message", () => {
    setup();
    expect(screen.queryByText(/error/i)).toBeNull();
  });

  it("displays the items", async () => {
    setup();
    await waitForElementToBeRemoved(screen.queryByText(/loading/i));
  });

  describe("page navigation", () => {
    it("displays the correct page number", async () => {
      setup();
      await waitForElementToBeRemoved(screen.queryByText(/loading/i));

      expect(screen.getByText(/page:/i)).toHaveTextContent(/^Page: 1$/);
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
          expect.stringContaining("result 10"),
          expect.stringContaining("result 11"),
          expect.stringContaining("result 12"),
          expect.stringContaining("result 13"),
          expect.stringContaining("result 14"),
          expect.stringContaining("result 15"),
          expect.stringContaining("result 16"),
          expect.stringContaining("result 17"),
          expect.stringContaining("result 18"),
          expect.stringContaining("result 19"),
        ]);
      });

      expect(screen.getByText(/page:/i)).toHaveTextContent(/^Page: 2$/);
    });

    it("goes to the prev page", async () => {
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
          expect.stringContaining("result 10"),
          expect.stringContaining("result 11"),
          expect.stringContaining("result 12"),
          expect.stringContaining("result 13"),
          expect.stringContaining("result 14"),
          expect.stringContaining("result 15"),
          expect.stringContaining("result 16"),
          expect.stringContaining("result 17"),
          expect.stringContaining("result 18"),
          expect.stringContaining("result 19"),
        ]);
      });

      fireEvent.click(
        screen.getByRole("button", {
          name: /prev/i,
        })
      );

      await waitFor(() => {
        const itemsContent = screen
          .getAllByRole("listitem")
          .map((i) => i.textContent);

        expect(itemsContent).toEqual([
          expect.stringContaining("result 0"),
          expect.stringContaining("result 1"),
          expect.stringContaining("result 2"),
          expect.stringContaining("result 3"),
          expect.stringContaining("result 4"),
          expect.stringContaining("result 5"),
          expect.stringContaining("result 6"),
          expect.stringContaining("result 7"),
          expect.stringContaining("result 8"),
          expect.stringContaining("result 9"),
        ]);
      });

      expect(screen.getByText(/page:/i)).toHaveTextContent(/^Page: 1$/);
    });

    it("does not go before first page", async () => {
      setup();

      await waitForElementToBeRemoved(screen.queryByText(/loading/i));
      fireEvent.click(
        screen.getByRole("button", {
          name: /prev/i,
        })
      );

      await waitForElementToBeRemoved(screen.queryAllByText(/loading/i));

      await waitFor(() => {
        const itemsContent = screen
          .getAllByRole("listitem")
          .map((i) => i.textContent);

        expect(itemsContent).toEqual([
          expect.stringContaining("result 0"),
          expect.stringContaining("result 1"),
          expect.stringContaining("result 2"),
          expect.stringContaining("result 3"),
          expect.stringContaining("result 4"),
          expect.stringContaining("result 5"),
          expect.stringContaining("result 6"),
          expect.stringContaining("result 7"),
          expect.stringContaining("result 8"),
          expect.stringContaining("result 9"),
        ]);
      });

      expect(screen.getByText(/page:/i)).toHaveTextContent(/^Page: 1$/);
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
