import type { Meta, Story } from "@storybook/react";
import React from "react";
import ErrorMessage from ".";

export default {
  title: "ErrorMessage",
  component: ErrorMessage,
} as Meta;

type Props = React.ComponentProps<typeof ErrorMessage>;

export const Default: Story<Props> = (props) => (
  <ErrorMessage message={props.message} />
);

Default.args = {
  message: "Test",
};
