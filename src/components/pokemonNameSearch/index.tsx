import React from "react";

type Props = {
  selectedName: string;
  suggestions: string[];
  onType: (param: string) => void;
  onChoose: () => void;
};

//Array.from(document.querySelectorAll('option')).map(o => o.value)

const PokemonNameSearch: React.FC<Props> = props => {
  return (
    <form
      onSubmit={evt => {
        props.onChoose();
        evt.preventDefault();
      }}
    >
      <input
        type="search"
        list="pokemonNames"
        onChange={evt => {
          props.onType(evt.target.value);
        }}
      />
      <datalist id="pokemonNames">
        {props.suggestions.map(r => (
          <option key={r} value={r} />
        ))}
      </datalist>
      <button type="submit">Go</button>
    </form>
  );
};

export default PokemonNameSearch;
