import { action } from "@storybook/addon-actions";
import React from "react";
import Pagination from "./index";

export default {
  title: "Pagination",
  component: Pagination
};

export const _default = () => (
  <Pagination
    currentPage={1}
    pageCount={10}
    onPrev={action("onPrev")}
    onNext={action("onNext")}
  />
);
