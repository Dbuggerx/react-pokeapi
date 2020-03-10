import React from "react";
import Search from "../../containers/Search";
import "./style.scss";
import { Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import * as routes from "../../routeManager";

const Header: React.FC = () => (
  <header className="header">
    <a
      href="https://github.com/PokeAPI/pokeapi"
      target="_blank"
      rel="noopener noreferrer"
      className="header__logo"
    >
      <img
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi.svg?sanitize=true"
        alt="PokeAPI"
      />
    </a>
    <div className="header__search">
      <Route path={routes.pokemonRoute.path}>
        <Link to={routes.listRoute.path} title="Go back" className="header__back-button">
          <FontAwesomeIcon icon={faArrowLeft} size="2x" />
        </Link>
      </Route>
      <Search />
    </div>
  </header>
);

export default Header;
