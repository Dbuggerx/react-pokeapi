import type { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import PokemonTypePill from "./index";

export default {
  title: "PokemonTypePill",
  component: PokemonTypePill,
  argTypes: {
    pokemonType: {
      control: {
        type: "select",
        options: [
          "fighting",
          "flying",
          "poison",
          "ground",
          "rock",
          "bug",
          "ghost",
          "steel",
          "fire",
          "water",
          "grass",
          "electric",
          "psychic",
          "ice",
          "dragon",
          "dark",
          "fairy",
          "unknown",
          "shadow"
        ]
      }
    }
  }
} as Meta;

type Props = React.ComponentProps<typeof PokemonTypePill>;

export const Default: Story<Props> = props => <PokemonTypePill {...props} />;

Default.args = {
  pokemonType: "electric"
};
