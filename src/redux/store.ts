import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import rootReducer from "./rootReducer";
import rootEpic from "./rootEpic";
import observableFetch from "./observableFetch";
import { AppState } from "./types";

export default function buildStore(
  preloadedState: Parameters<typeof configureStore>[0]["preloadedState"] = undefined,
  disableMiddlewares = false
) {
  const epicMiddleware = createEpicMiddleware({
    dependencies: {
      observableFetch
    }
  });

  const middlewares =
    process.env.NODE_ENV === "production"
      ? [epicMiddleware]
      : [
          ...getDefaultMiddleware({
            immutableCheck: true,
            serializableCheck: false,
            thunk: false
          }),
          epicMiddleware
        ];

  const store = configureStore({
    reducer: rootReducer,
    middleware: disableMiddlewares ? [] : middlewares,
    preloadedState,
    // @ts-ignore
    devTools: {
      // @ts-ignore
      stateSanitizer(state: AppState) {
        return {
          ...state,
          pokemonPage: {
            ...state.pokemonPage,
            details: Array.from(state.pokemonPage.details.entries())
          }
        };
      }
    }
  });

  if (!disableMiddlewares) epicMiddleware.run(rootEpic);

  return store;
}
