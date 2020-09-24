import React from "react";
import ResourceState from "./index";

export default {
  title: "ResourceState",
  component: ResourceState
};

export const _default = () => (
  <ResourceState
    state={{
      loading: true,
      error: "Error",
      data: "data"
    }}
  />
);
