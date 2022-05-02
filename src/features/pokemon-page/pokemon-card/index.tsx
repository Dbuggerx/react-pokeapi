import type { EntityId } from "@reduxjs/toolkit";
import type { LoadableResource } from "../../../redux/types";
import type { PokemonInfo } from "../types";
import { usePokemonInfo } from "./hooks";

export default function PokemonCard(props: { pokemonName: EntityId }) {
  const pokemonInfo = usePokemonInfo(props.pokemonName);

  return (
    <section>
      {props.pokemonName}
      <PokemonCardData pokemonName={props.pokemonName} info={pokemonInfo} />
    </section>
  );
}

function PokemonCardData(props: {
  pokemonName: EntityId;
  info: LoadableResource<PokemonInfo> | undefined;
}) {
  if (props.info?.loading) return <strong>Loading...</strong>;
  if (props.info?.error) return <strong>Error!</strong>;

  return <section>{props.info?.data.order}</section>;
}
