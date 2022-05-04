import type { Meta, Story } from "@storybook/react";
import LoadingSpinner from ".";

export default {
  title: "LoadingSpinner",
  component: LoadingSpinner,
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Default: Story = () => <LoadingSpinner />;

Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
