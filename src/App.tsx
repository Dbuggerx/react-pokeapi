import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import Details from "./pages/details";
import List from "./pages/list";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<Navigate to="/list" replace />} />
        <Route index element={<Navigate to="/list" replace />} />
        <Route path="list" element={<List />} />
        <Route path="details" element={<Details backPath="/list" />} />
      </Route>
    </Routes>
  );
}

export default App;
