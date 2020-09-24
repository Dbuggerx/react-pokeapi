import React from "react";
import CardLayout from "./index";

export default {
  title: "CardLayout",
  component: CardLayout
};

export const Default = () => {
  const mocks = Array.from({ length: 15 }, (_, i) => (
    <div key={i} style={{ border: "solid 1px black" }}>{`Card ${i}`}</div>
  ));

  return <CardLayout>{mocks}</CardLayout>;
};
