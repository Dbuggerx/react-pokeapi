import type { Meta, Story } from "@storybook/react";
import { PokemonNameSvgShape, PokemonCardData } from ".";
import mock from "./mock";

export default {
  title: "PokemonCard",
  component: PokemonCardData,
  parameters: {
    layout: "centered",
  },
  decorators: [],
} as Meta;

type Props = React.ComponentProps<typeof PokemonCardData>;
const Template: Story<Props> = (args) => (
  <div style={{ width: "15em", height: "15em" }}>
    <PokemonNameSvgShape />
    <PokemonCardData {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});
Default.args = {
  pokemonName: "test",
  info: {
    data: mock,
    loading: false,
    error: false,
  },
};
