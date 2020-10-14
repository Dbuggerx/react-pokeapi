import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import LoadingSpinner from "./index";

export default {
  title: "LoadingSpinner",
  component: LoadingSpinner
} as Meta;

export const Default: Story = () => <LoadingSpinner />;

Default.parameters = {
  controls: { hideNoControlsWarning: true }
};
