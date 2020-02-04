import * as React from "react";
import "./styles.css";
import { usePokemonPageEffects } from "./hooks/pokemonPage";
import Search from "./containers/search";

export default function App() {
  usePokemonPageEffects();
  return (
    <div className="App">
      <h1>PokeApi v2</h1>
      <Search />
    </div>
  );
}
