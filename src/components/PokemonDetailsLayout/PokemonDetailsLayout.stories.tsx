import type { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { PokemonDetailsLayout } from "./index";

type Props = React.ComponentProps<typeof PokemonDetailsLayout>;

export default {
  title: "PokemonDetailsLayout",
  component: PokemonDetailsLayout,
  argTypes: {
    images: {
      table: {
        disable: true
      }
    },
    description: {
      table: {
        disable: true
      }
    },
    types: {
      table: {
        disable: true
      }
    },
    profile: {
      table: {
        disable: true
      }
    },
    abilities: {
      table: {
        disable: true
      }
    },
    stats: {
      table: {
        disable: true
      }
    },
    color: {
      control: {
        type: "select",
        options: [
          "black",
          "blue",
          "brown",
          "gray",
          "green",
          "pink",
          "purple",
          "red",
          "white",
          "yellow"
        ]
      }
    },
    backgroundImageUrl: {
      control: {
        type: "select",
        options: [
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg",
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
        ]
      }
    }
  }
} as Meta;

const MockSection: React.FC = ({ children }) => (
  <div
    style={{
      border: "solid 1px grey",
      width: "100%",
      height: "100%",
      boxSizing: "border-box",
      padding: 0,
      margin: 0
    }}
  >
    {children}
  </div>
);

export const Default: Story<Props> = props => (
  <PokemonDetailsLayout {...props} />
);

Default.args = {
  color: "blue",
  pokemonId: 123,
  pokemonName: "the pokemon name",
  descriptionTitle: "Description title",
  images: <MockSection>Images</MockSection>,
  description: <MockSection>Description</MockSection>,
  types: <MockSection>Types</MockSection>,
  profile: <MockSection>Profile</MockSection>,
  abilities: <MockSection>abilities</MockSection>,
  stats: <MockSection>stats</MockSection>,
  backgroundImageUrl:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg"
};
