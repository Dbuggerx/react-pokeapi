import React from "react";
import PokemonNameSearch from "../../components/pokemonNameSearch";
import { useDispatch } from "react-redux";
import { useFilteredPokemonNamesEffect } from "../../hooks/filteredPokemonNames";
import { useTypedSelector } from "../../redux/types";
import { actions as filterNamesActions } from "../../redux/filteredPokemonNames";
import { actions as pokemonActions } from "../../redux/pokemonData";

const Search: React.FC = () => {
  useFilteredPokemonNamesEffect();

  const dispatch = useDispatch();
  const filterState = useTypedSelector(state => state.filteredPokemonNames);

  return (
    <div>
      <PokemonNameSearch
        selectedName={filterState.name}
        suggestions={filterState.suggestions}
        onType={filterParam => {
          dispatch(filterNamesActions.search(filterParam));
        }}
        onChoose={() => {
          dispatch(
            pokemonActions.fetchData({
              name: filterState.name
            })
          );
        }}
      />
    </div>
  );
};

export default Search;
