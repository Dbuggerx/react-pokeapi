import React from "react";
import { text, color, number, select } from "@storybook/addon-knobs";
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
    pokemonId={number("pokemon id", 123)}
    color={select(
      "color",
      {
        black: "black",
        blue: "blue",
        brown: "brown",
        gray: "gray",
        green: "green",
        pink: "pink",
        purple: "purple",
        red: "red",
        white: "white",
        yellow: "yellow"
      },
      "green"
    )}
    descriptionTitle={text("description title", "description title")}
    description={<MockSection>Description</MockSection>}
    abilities={<MockSection>abilities</MockSection>}
    stats={<MockSection>stats</MockSection>}
    backgroundImageUrl={text(
      "background image url",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
    )}
  />
);
