import type { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import CardLayout from "./index";

type Args = { mocks: number };

export default {
  title: "CardLayout",
  component: CardLayout,
  args: {
    mocks: 10
  }
} as Meta<Args>;

type Props = React.ComponentProps<typeof CardLayout>;

export const Default: Story<Props & Args> = args => {
  const mocks = Array.from({ length: args.mocks }, (_, i) => (
    <div key={i} style={{ border: "solid 1px black" }}>{`Card ${i}`}</div>
  ));

  return <CardLayout>{mocks}</CardLayout>;
};
