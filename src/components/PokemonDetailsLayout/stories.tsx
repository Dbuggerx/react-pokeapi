import React from "react";
import { boolean, text } from "@storybook/addon-knobs";
import PokemonDetailsLayout from "./index";
import mock from "./mock";

export default {
  title: "PokemonDetailsLayout",
  component: PokemonDetailsLayout
};

export const _default = () => (
  <PokemonDetailsLayout
    details={{
      data: mock,
      loading: boolean("loading", false),
      error: text("error", undefined)
    }}
  />
);
