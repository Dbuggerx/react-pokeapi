import * as React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import PokemonDetails from "./containers/PokemonDetails";
import PokemonList from "./containers/PokemonList";
import * as routes from "./routeManager";
import Header from './components/Header';
import "typeface-open-sans";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={routes.pokemonRoute.path} component={PokemonDetails} />
        <Route path={routes.listRoute.path} component={PokemonList} />
        <Redirect exact from="/" to={routes.listRoute.path} />
      </Switch>
    </div>
  );
}
