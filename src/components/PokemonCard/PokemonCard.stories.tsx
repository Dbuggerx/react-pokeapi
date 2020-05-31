import React from "react";
import { boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import PokemonCard from "./index";
import mock from "./mock";

export default {
  title: "PokemonCard",
  component: PokemonCard
};

export const _default = () => (
  <div style={{ width: "15em", height: "15em" }}>
    <PokemonCard
      pokemonName={text("pokemon name", "test")}
      details={{
        data: mock,
        loading: boolean("loading", false),
        error: text("error", "")
      }}
      onClick={action("onClick")}
    />
  </div>
);
