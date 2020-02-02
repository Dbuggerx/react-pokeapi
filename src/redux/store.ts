import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import rootReducer from "./rootReducer";
import rootEpic from "./rootEpic";
import observableFetch from "./observableFetch";

const epicMiddleware = createEpicMiddleware({
  dependencies: {
    observableFetch
  }
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware]
});
export type AppDispatch = typeof store.dispatch;
export default store;

epicMiddleware.run(rootEpic);
