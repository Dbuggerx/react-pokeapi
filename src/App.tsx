import * as React from "react";
import "./styles.css";
import { usePokemonPageEffects } from "./hooks/pokemonPage";

export default function App() {
  usePokemonPageEffects();
  return (
    <div className="App">
      <h1>PokeApi v2</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
