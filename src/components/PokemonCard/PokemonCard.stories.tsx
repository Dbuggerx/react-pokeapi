import type { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import PokemonCard, { PokemonNameSvgShape } from "./index";
import mock from "./mock";

export default {
  title: "PokemonCard",
  component: PokemonCard
} as Meta;

type Props = React.ComponentProps<typeof PokemonCard>;
const Template: Story<Props> = args => (
  <div style={{ width: "15em", height: "15em" }}>
    <PokemonNameSvgShape />
    <PokemonCard {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});
Default.args = {
  pokemonName: "test",
  details: {
    data: mock,
    loading: false,
    error: ""
  }
};
