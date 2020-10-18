import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Route } from "react-router-dom";
import Search from "../../containers/Search";
import * as routes from "../../routeManager";
import { useHasScrolled } from "./hooks";
import "./style.scss";

type Props = {
  goBack: () => void;
};

const Header: React.FC<Props> = props => {
  const scrolled = useHasScrolled();

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
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
          <button
            title="Go back"
            className="header__back-button"
            onClick={props.goBack}
          >
            <FontAwesomeIcon icon={faArrowLeft} size="2x" />
          </button>
        </Route>
        <Search />
      </div>
    </header>
  );
};

export default Header;
