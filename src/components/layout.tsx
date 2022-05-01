import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main>
      <h1>Pokemon</h1>

      <Outlet />
    </main>
  );
}
