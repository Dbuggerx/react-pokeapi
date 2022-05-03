import type { Slice } from "@reduxjs/toolkit";
import React from "react";

export const InjectSliceContext = React.createContext<
  ((slice: Slice) => void) | null
>(null);

export function useInjectReduxSlice() {
  const injectReduxSlice = React.useContext(InjectSliceContext);

  if (!injectReduxSlice) throw new Error("Missing slice injector function!");

  return injectReduxSlice;
}
