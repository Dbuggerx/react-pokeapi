import * as React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Search from "./containers/search";
import PokemonDetails from "./containers/pokemonDetails";
import PokemonList from "./containers/pokemonList";
import * as routes from "./routeManager";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>PokeApi v2</h1>
      <Search />
      <Switch>
        <Route path={routes.pokemonRoute.path} component={PokemonDetails} />
        <Route path={routes.listRoute.path} component={PokemonList} />
        <Redirect exact from="/" to={routes.listRoute.path} />
      </Switch>
    </div>
  );
}
