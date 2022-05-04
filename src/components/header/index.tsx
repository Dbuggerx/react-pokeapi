import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route, Routes } from "react-router-dom";
import PokemonSearch from "../../features/pokemon-names/pokemon-search";
import { useHasScrolled } from "./hooks";
import { pokemonDetailsRoute } from "../../pages/routes";
import "./style.scss";

export default function Header(props: { goBack: () => void }) {
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
        <Routes>
          <Route
            path={pokemonDetailsRoute.path}
            element={
              <button
                title="Go back"
                className="header__back-button"
                onClick={props.goBack}
              >
                <FontAwesomeIcon icon={faArrowLeft} size="2x" />
              </button>
            }
          />
        </Routes>
        <PokemonSearch />
      </div>
    </header>
  );
}
