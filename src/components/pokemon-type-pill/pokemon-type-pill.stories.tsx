import type { Meta, Story } from "@storybook/react";
import PokemonTypePill from ".";

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
          "shadow",
        ],
      },
    },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

type Props = React.ComponentProps<typeof PokemonTypePill>;

export const Default: Story<Props> = (props) => <PokemonTypePill {...props} />;

Default.args = {
  pokemonType: "electric",
};
