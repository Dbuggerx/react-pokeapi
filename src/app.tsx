import { Routes, Route, Navigate } from "react-router-dom";
import "./app.css";
import Layout from "./components/layout";
import Details, { path as detailsPath } from "./pages/details";
import List, { path as listPath } from "./pages/list";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={listPath} element={<List />} />
        <Route
          path={detailsPath}
          element={<Details backPath={`/${listPath}`} />}
        />
        <Route path="*" element={<Navigate to={`/${listPath}`} replace />} />
        <Route index element={<Navigate to={`/${listPath}`} replace />} />
      </Route>
    </Routes>
  );
}

export default App;
