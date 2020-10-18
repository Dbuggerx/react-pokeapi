import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, Route } from "react-router-dom";
import Search from "../../containers/Search";
import * as routes from "../../routeManager";
import "./style.scss";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useLayoutEffect(() => {
    function onScroll(evt: Event) {
      setScrolled((evt.target as HTMLDivElement).scrollTop > 0);
    }

    document.addEventListener("scroll", onScroll, true);

    return () => {
      setScrolled(false);
      document.removeEventListener("scroll", onScroll, true);
    };
  }, []);

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
          <Link
            to={routes.listRoute.path}
            title="Go back"
            className="header__back-button"
          >
            <FontAwesomeIcon icon={faArrowLeft} size="2x" />
          </Link>
        </Route>
        <Search />
      </div>
    </header>
  );
};

export default Header;
