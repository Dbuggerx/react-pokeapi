import React from "react";
import PokemonNameSearch from "../../components/pokemonNameSearch";
import { useDispatch } from "react-redux";
import { actions as filterNamesActions } from "../../redux/filteredPokemonNames";
import { useFilteredPokemonNamesEffect } from "../../hooks/filteredPokemonNames";
import { useTypedSelector } from "../../redux/types";

const Search: React.FC = () => {
  useFilteredPokemonNamesEffect();

  const dispatch = useDispatch();
  const filteredNames = useTypedSelector(state => state.filteredPokemonNames);

  return (
    <div>
      <PokemonNameSearch
        onSearch={filterParam => {
          dispatch(filterNamesActions.search(filterParam));
        }}
        results={filteredNames}
      />
    </div>
  );
};

export default Search;
