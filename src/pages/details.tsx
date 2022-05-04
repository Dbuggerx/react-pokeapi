import React from "react";

const LazyPokemonInfo = React.lazy(
  () => import("../features/pokemon-details/pokemon-info")
);

export default function Details() {
  return (
    <React.Suspense fallback={<strong>Loading component...</strong>}>
      <LazyPokemonInfo />
    </React.Suspense>
  );
}
