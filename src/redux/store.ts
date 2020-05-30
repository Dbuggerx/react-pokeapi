import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import rootReducer from "./rootReducer";
import rootEpic from "./rootEpic";
import observableFetch from "./observableFetch";

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
