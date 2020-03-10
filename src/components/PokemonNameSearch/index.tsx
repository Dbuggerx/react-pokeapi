import React from "react";
import "./style.scss";

type Props = {
  selectedName: string;
  suggestions: string[];
  onType: (param: string) => void;
  onChoose: () => void;
};

const PokemonNameSearch: React.FC<Props> = props => {
  return (
    <form
      onSubmit={evt => {
        props.onChoose();
        evt.preventDefault();
      }}
      className="search"
    >
      <input
        type="search"
        list="pokemonNames"
        placeholder="Search"
        value={props.selectedName}
        onChange={evt => {
          props.onType(evt.target.value);
        }}
        className="search__input"
      />
      <datalist id="pokemonNames">
        {props.suggestions.map(r => (
          <option key={r} value={r} />
        ))}
      </datalist>
      <button type="submit" className="search__button">
        Go
      </button>
    </form>
  );
};

export default PokemonNameSearch;
