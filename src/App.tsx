import * as React from "react";
import { usePokemonPageEffects } from "./hooks/pokemonPage";
import { usePokemonDataEffects } from "./hooks/pokemonData";
import { Route, Redirect, Switch } from "react-router-dom";
import Search from "./containers/search";
import PokemonDetails from "./containers/pokemonDetails";
import PokemonList from "./containers/pokemonList";
import "./styles.css";

export default function App() {
  usePokemonPageEffects();
  usePokemonDataEffects();

  return (
    <div className="App">
      <h1>PokeApi v2</h1>
      <Search />
      <Switch>
        <Route path="/pokemon" component={PokemonDetails} />
        <Route path="/list" component={PokemonList} />
        <Redirect exact from="/" to="/list" />
      </Switch>
    </div>
  );
}
