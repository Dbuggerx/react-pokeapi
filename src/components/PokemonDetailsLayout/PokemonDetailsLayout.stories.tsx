import React from "react";
import { PokemonDetailsLayout } from "./index";

export default {
  title: "PokemonDetailsLayout",
  component: PokemonDetailsLayout
};

const MockSection: React.FC = ({ children }) => (
  <div
    style={{
      border: "solid 1px grey",
      width: "100%",
      height: "100%",
      boxSizing: "border-box"
    }}
  >
    {children}
  </div>
);

export const Default = () => (
  <PokemonDetailsLayout
    pokemonName={"test"}
    images={<MockSection>Images</MockSection>}
    types={<MockSection>Types</MockSection>}
    profile={<MockSection>Profile</MockSection>}
    pokemonId={123}
    color={"blue"}
    descriptionTitle={"description title"}
    description={<MockSection>Description</MockSection>}
    abilities={<MockSection>abilities</MockSection>}
    stats={<MockSection>stats</MockSection>}
    backgroundImageUrl={
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
    }
  />
);
