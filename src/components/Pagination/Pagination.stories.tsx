import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import Pagination from "./index";

export default {
  title: "Pagination",
  component: Pagination
} as Meta;

export const Default: Story = () => (
  <Pagination
    currentPage={1}
    pageCount={10}
    onPrev={action("onPrev")}
    onNext={action("onNext")}
  />
);
