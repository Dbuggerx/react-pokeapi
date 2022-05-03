import { useParams } from "react-router-dom";
import { usePokemonInfo } from "./hooks";
import pokemonDetailsSlice, {
  selectors as pokemonDetailsSelectors,
} from "../slice";
import withLazyRedux from "../../../redux/with-lazy-redux";

function PokemonInfo() {
  const { pokemonName } = useParams();
  const { isLoading, isError, speciesId, pokemonInfo } =
    usePokemonInfo(pokemonName);

  if (isLoading) return <strong>Loading...</strong>;
  if (isError) return <strong>Error!</strong>;

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
