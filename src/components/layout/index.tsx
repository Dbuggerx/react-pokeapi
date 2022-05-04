import React from "react";
import { Outlet } from "react-router-dom";
import PokemonSearch from "../../features/pokemon-names/pokemon-search";
import "./style.scss";

export default React.forwardRef<HTMLDivElement, { className?: string }>(
  function Layout({ className }, ref) {
    return (
      <main className={`app-layout ${className ?? ""}`} ref={ref}>
        <h1>Pokemon</h1>
        <header>
          <PokemonSearch />
        </header>

        <Outlet />
      </main>
    );
  }
);
