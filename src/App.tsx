import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "typeface-open-sans";
import Header from "./components/Header";
import PokemonDetails from "./containers/PokemonDetails";
import PokemonList from "./containers/PokemonList";
import { useGoBack } from "./hooks/pokemonPage";
import * as routes from "./routeManager";
import "./styles.css";

export default function App() {
  const goBack = useGoBack();

  return (
    <div className="App">
      <Header goBack={goBack} />
      <Switch>
        <Route path={routes.pokemonRoute.path} component={PokemonDetails} />
        <Route path={routes.listRoute.path} component={PokemonList} />
        <Redirect exact to={routes.listRoute.path} />
      </Switch>
    </div>
  );
}
