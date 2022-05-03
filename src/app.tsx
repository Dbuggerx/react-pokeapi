import { Provider } from "react-redux";
import { buildStore } from "./redux/store";
import { Routes, Route, Navigate } from "react-router-dom";
import "./app.css";
import Layout from "./components/layout";
import Details, { path as detailsPath } from "./pages/details";
import List, { path as listPath } from "./pages/list";
import React from "react";
import { InjectSliceContext } from "./redux/inject-slice-context";

function App() {
  const { store, injectSlice } = React.useMemo(() => buildStore(), []);

  return (
    <Provider store={store}>
      <InjectSliceContext.Provider value={injectSlice}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path={listPath} element={<List />} />
            <Route
              path={detailsPath}
              element={<Details backPath={`/${listPath}`} />}
            />
            <Route
              path="*"
              element={<Navigate to={`/${listPath}`} replace />}
            />
            <Route index element={<Navigate to={`/${listPath}`} replace />} />
          </Route>
        </Routes>
      </InjectSliceContext.Provider>
    </Provider>
  );
}

export default App;
