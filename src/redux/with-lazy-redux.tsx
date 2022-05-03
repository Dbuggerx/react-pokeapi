import React from "react";
import type { Slice } from "@reduxjs/toolkit";
import { useAppSelector } from "./hooks";
import { useInjectReduxSlice } from "./inject-slice-context";
import type { RootState } from "./store";

export default function withLazyRedux<P>(
  Component: React.JSXElementConstructor<P>,
  slice: Slice,
  sliceReadySelector: (reduxState: RootState) => boolean
) {
  return function LazyRedux(props: P) {
    const sliceReady = useAppSelector(sliceReadySelector);
    const injectSlice = useInjectReduxSlice();

    React.useEffect(() => {
      if (!sliceReady) injectSlice(slice);
    }, [injectSlice, sliceReady]);

    return sliceReady ? <Component {...props} /> : null;
  };
}
