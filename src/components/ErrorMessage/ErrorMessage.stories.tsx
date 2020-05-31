import React from "react";
import ErrorMessage from "./index";
import { text } from "@storybook/addon-knobs";

export default {
  title: "ErrorMessage",
  component: ErrorMessage
};
export const _default = () => <ErrorMessage message={text("error message", "test")} />;
