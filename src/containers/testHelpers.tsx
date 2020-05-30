import React from "react";
import { Reducer } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { MemoryRouter, Route } from "react-router-dom";
import buildStore from "../redux/store";

export function withRedux(
  ui: React.ReactElement,
  reducer: {
    [key: string]: Reducer;
  },
  initialState: any
) {
  const store = buildStore(initialState, true);
  const dispatchSpy = jest.spyOn(store, "dispatch");

  return {
    result: <Provider store={store}>{ui}</Provider>,
    store,
    dispatchSpy,
  };
}

export function withRouter(ui: React.ReactElement) {
  const routerValues: any = {
    history: undefined,
    location: undefined,
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
