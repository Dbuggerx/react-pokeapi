import type { Meta, Story } from "@storybook/react";
import React from "react";
import ResourceState from ".";

export default {
  title: "ResourceState",
  component: ResourceState,
  parameters: {
    layout: "centered",
  },
} as Meta;

type Props = React.ComponentProps<typeof ResourceState>;

export const Default: Story<Props> = (props) => <ResourceState {...props} />;

Default.args = {
  state: {
    loading: true,
    error: true,
    data: "data",
  },
};
