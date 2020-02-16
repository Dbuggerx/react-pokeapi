import React from "react";
import { text } from "@storybook/addon-knobs";
import PokemonDetailsLayout from "./index";

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

export const _default = () => (
  <PokemonDetailsLayout
    pokemonName={text("pokemon name", "test")}
    images={<MockSection>Images</MockSection>}
    types={<MockSection>Types</MockSection>}
    profile={<MockSection>Profile</MockSection>}
  />
);
