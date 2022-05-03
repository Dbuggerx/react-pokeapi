import { Outlet } from "react-router-dom";
import PokemonSearch from "../features/pokemon-names/pokemon-search";

export default function Layout() {
  return (
    <main>
      <h1>Pokemon</h1>
      <header>
        <PokemonSearch />
      </header>

      <Outlet />
    </main>
  );
}
