import React from "react";
import ResourceState from "./index";
import { text, boolean } from "@storybook/addon-knobs";

export default {
  title: "ResourceState",
  component: ResourceState
};

export const _default = () => (
  <ResourceState
    state={{
      loading: boolean("loading", true),
      error: text("error message", "Error"),
      data: text("data", "data")
    }}
  />
);
