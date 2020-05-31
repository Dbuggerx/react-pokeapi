import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import buildStore from "./redux/store";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Provider store={buildStore()}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  rootElement
);
