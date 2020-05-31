import React from "react";
import Pagination from "./index";
import { number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "Pagination",
  component: Pagination
};

export const _default = () => (
  <Pagination
    currentPage={number("current page", 1)}
    pageCount={number("page count", 10)}
    onPrev={action("onPrev")}
    onNext={action("onNext")}
  />
);
