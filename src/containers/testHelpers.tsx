import React from "react";
import { Reducer, combineReducers } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { MemoryRouter, Route } from "react-router-dom";

export function withRedux(
  ui: React.ReactElement,
  reducer: {
    [key: string]: Reducer;
  },
  initialState: any
) {
  const dispatchSpy = jest.fn();
  const reducerSpy: Reducer = (state, action) => {
    dispatchSpy(action);
    return {};
  };
  const store = createStore(combineReducers({ ...reducer, reducerSpy }), initialState);
  // Clear redux internal dispatches
  dispatchSpy.mockClear();
  return {
    result: <Provider store={store}>{ui}</Provider>,
    store,
    dispatchSpy
  };
}

export function withRouter(ui: React.ReactElement) {
  const routerValues: any = {
    history: undefined,
    location: undefined
  };

  const result = (
    <MemoryRouter>
      {ui}
      <Route
        path="*"
        render={({ history, location }) => {
          routerValues.history = history;
          routerValues.location = location;
          return null;
        }}
      />
    </MemoryRouter>
  );

  return { result, routerValues };
}
