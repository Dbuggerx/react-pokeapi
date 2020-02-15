import React from "react";
import PokemonNameSearch from "../../components/PokemonNameSearch";
import * as hooks from "../../hooks/filteredPokemonNames";

const Search: React.FC = () => {
  hooks.useInitialFilterSuggestionsEffect();
  const updateSuggestions = hooks.useUpdateSuggestionsCallback();
  const changeRoute = hooks.useChangeRouteCallback();
  const filterState = hooks.useFilterState();

  return (
    <div>
      <PokemonNameSearch
        selectedName={filterState.name}
        suggestions={filterState.suggestions}
        onType={updateSuggestions}
        onChoose={changeRoute}
      />
    </div>
  );
};

export default Search;
