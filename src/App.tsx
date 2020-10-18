import * as React from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import "typeface-open-sans";
import Header from "./components/Header";
import PokemonDetails from "./containers/PokemonDetails";
import PokemonList from "./containers/PokemonList";
import * as routes from "./routeManager";
import { listRoute } from "./routeManager";
import "./styles.css";

export default function App() {
  const history = useHistory();

  const goBack = () => {
    if (history.length > 2) history.goBack();
    else history.push(listRoute.path);
  };

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
