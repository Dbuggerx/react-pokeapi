import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./containers/App";
import buildStore from "./redux/store";

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
