import { useParams } from "react-router-dom";
import { usePokemonInfo } from "./hooks";
import pokemonDetailsSlice, {
  selectors as pokemonDetailsSelectors,
} from "../slice";
import withLazyRedux from "../../../redux/with-lazy-redux";

function PokemonInfo() {
  const { pokemonName } = useParams();
  const { error, isSpeciesLoading, isSpeciesError, speciesId, pokemonInfo } =
    usePokemonInfo(pokemonName);

  if (error === "species not found") return <strong>Not found!</strong>;
  if (isSpeciesLoading) return <strong>Loading...</strong>;
  if (error === "unexpected error" || isSpeciesError)
    return <strong>Error!</strong>;

  return (
    <article>
      <h1>{pokemonName}</h1>
      <p>Species ID: {speciesId}</p>
      <p>Abilities: {pokemonInfo?.data.abilities?.length}</p>
    </article>
  );
}

export default withLazyRedux(
  PokemonInfo,
  pokemonDetailsSlice,
  pokemonDetailsSelectors.sliceAvailable
);
