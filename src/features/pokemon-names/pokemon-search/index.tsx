import { useDeferredValue } from "react";
import * as hooks from "./hooks";
import "./style.scss";

export default function PokemonSearch() {
  hooks.useInitialFilterSuggestionsEffect();
  const updateSuggestions = hooks.useUpdateSuggestionsCallback();
  const changeRoute = hooks.useChangeRouteCallback();
  const filterState = hooks.useFilterState();
  const deferredFilterState = useDeferredValue(filterState);

  return (
    <form
      onSubmit={(evt) => {
        changeRoute();
        evt.preventDefault();
      }}
      className="search"
      role="search"
    >
      <input
        type="search"
        list="pokemonNames"
        placeholder="Search"
        value={deferredFilterState.name}
        onChange={(evt) => {
          updateSuggestions(evt.target.value);
        }}
        className="search__input"
      />
      <datalist id="pokemonNames">
        {deferredFilterState.suggestions.map((r) => (
          <option key={r} value={r} />
        ))}
      </datalist>
      <button type="submit" className="search__button">
        Go
      </button>
    </form>
  );
}
