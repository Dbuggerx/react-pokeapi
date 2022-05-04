import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import Pagination from ".";

export default {
  title: "Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Default: Story = () => (
  <Pagination
    currentPage={1}
    pageCount={10}
    onPrev={action("onPrev")}
    onNext={action("onNext")}
  />
);
