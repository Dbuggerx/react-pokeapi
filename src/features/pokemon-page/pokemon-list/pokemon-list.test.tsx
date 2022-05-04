/* eslint-disable testing-library/no-node-access */
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
    const { store } = buildStore();

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
    expect(screen.getByRole("alert")).toHaveAttribute("aria-busy", "true");
  });

  it("does not display error message", () => {
    setup();
    expect(screen.queryByText(/error/i)).toBeNull();
  });

  it("displays the items", async () => {
    setup();
    await waitForElementToBeRemoved(screen.queryByRole("alert"));
    await waitFor(() => {
      const itemsContent = Array.from(
        document.getElementsByTagName("textPath")
      ).map((i) => i.textContent);

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
  });

  describe("page navigation", () => {
    it("displays the correct page number", async () => {
      setup();

      expect(await screen.findByText(/page/i)).toHaveTextContent(
        /^page 1 of 13$/
      );
    });

    it("goes to the next page", async () => {
      setup();

      fireEvent.click(
        await screen.findByRole("button", {
          name: /next/i,
        })
      );

      await waitFor(() => {
        const itemsContent = Array.from(
          document.getElementsByTagName("textPath")
        ).map((i) => i.textContent);

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

      expect(screen.getByText(/page/i)).toHaveTextContent(/^page 2 of 13$/);
    });

    it("goes to the prev page", async () => {
      setup();

      fireEvent.click(
        await screen.findByRole("button", {
          name: /next/i,
        })
      );

      await waitFor(() => {
        const itemsContent = Array.from(
          document.getElementsByTagName("textPath")
        ).map((i) => i.textContent);

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
        await screen.findByRole("button", {
          name: /prev/i,
        })
      );

      await waitFor(() => {
        const itemsContent = Array.from(
          document.getElementsByTagName("textPath")
        ).map((i) => i.textContent);

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

      expect(screen.getByText(/page/i)).toHaveTextContent(/^page 1 of 13$/);
    });

    it("does not go before first page", async () => {
      setup();

      fireEvent.click(
        await screen.findByRole("button", {
          name: /prev/i,
        })
      );
      await waitForElementToBeRemoved(screen.queryAllByRole("alert"));

      await waitFor(() => {
        const itemsContent = Array.from(
          document.getElementsByTagName("textPath")
        ).map((i) => i.textContent);

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

      expect(screen.getByText(/page/i)).toHaveTextContent(/^page 1 of 13$/);
    });
  });

  describe("server errors", () => {
    beforeAll(() => {
      server.use(errorPokemonPageHandler);
    });

    it("displays error message", async () => {
      setup();

      await waitForElementToBeRemoved(screen.queryByRole("alert"));
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });
});
