import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import observableFetch from "./observableFetch";
import rootEpic from "./rootEpic";
import rootReducer from "./rootReducer";

export default function buildStore(
  preloadedState: Parameters<
    typeof configureStore
  >[0]["preloadedState"] = undefined,
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
            immutableCheck: false,
            serializableCheck: false,
            thunk: false
          }),
          epicMiddleware
        ];

  const store = configureStore({
    reducer: rootReducer,
    middleware: disableMiddlewares ? [] : middlewares,
    preloadedState
  });

  if (!disableMiddlewares) epicMiddleware.run(rootEpic);

  return store;
}
