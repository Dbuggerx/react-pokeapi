import type { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import ResourceState from "./index";

export default {
  title: "ResourceState",
  component: ResourceState
} as Meta;

type Props = React.ComponentProps<typeof ResourceState>;

export const Default: Story<Props> = props => <ResourceState {...props} />;

Default.args = {
  state: {
    loading: true,
    error: "Error",
    data: "data"
  }
};
