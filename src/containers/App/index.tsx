import * as React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import "typeface-open-sans";
import AppLayout from "../../components/AppLayout";
import Header from "../../components/Header";
import { useGoBack } from "../../hooks/pokemonPage";
import * as routes from "../../routeManager";
import PokemonDetails from "../PokemonDetails";
import PokemonList from "../PokemonList";

export default function App() {
  const location = useLocation();

  const goBack = useGoBack();

  return (
    <AppLayout locationKey={location.key}>
      <>
        <Header goBack={goBack} />
        <Switch location={location}>
          <Route path={routes.pokemonRoute.path} component={PokemonDetails} />
          <Route path={routes.listRoute.path} component={PokemonList} />
          <Redirect exact to={routes.listRoute.path} />
        </Switch>
      </>
    </AppLayout>
  );
}
