import React from "react";
import CardLayout from "./index";
import { number } from "@storybook/addon-knobs";

export default {
  title: "CardLayout",
  component: CardLayout
};

export const _default = () => {
  const mocks = Array.from({ length: number("item count", 15) }, (_, i) => (
    <div key={i} style={{ border: "solid 1px black" }}>{`Card ${i}`}</div>
  ));

  return <CardLayout>{mocks}</CardLayout>;
};
