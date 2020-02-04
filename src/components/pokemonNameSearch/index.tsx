import React from "react";

type Props = {
  onSearch: (param: string) => void;
  results: string[];
};

const PokemonNameSearch: React.FC<Props> = ({ onSearch, results }) => {
  return (
    <div>
      <input
        type="text"
        list="pokemonNames"
        onChange={evt => {
          onSearch(evt.target.value);
        }}
      />
      <datalist id="pokemonNames">
        {results.map(r => (
          <option key={r} value={r} />
        ))}
      </datalist>
    </div>
  );
};

export default PokemonNameSearch;
