import pokemon from "pokemon";
import Trie from "../../structures/trie";

const indexedNames = pokemon.all("en").reduce((acc, cur) => {
  acc.insert(cur.toLowerCase());
  return acc;
}, new Trie());

export function searchPokemonName(searchTerm: string) {
  return Array.from(indexedNames.autocomplete(searchTerm.toLowerCase())).sort();
}
