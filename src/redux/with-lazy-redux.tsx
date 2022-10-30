import React from "react";
import { useInjectReduxSlice } from "./inject-slice-context";
import type { Slice } from "@reduxjs/toolkit";

export default function withLazyRedux<P extends JSX.IntrinsicAttributes>(
  Component: React.JSXElementConstructor<P>,
  slice: Slice
) {
  return function LazyRedux(props: P) {
    const injectSlice = useInjectReduxSlice();
    const [sliceReady, setSliceReady] = React.useState(false);

    React.useEffect(() => {
      if (sliceReady) return;

      injectSlice(slice);
      setSliceReady(true);
    }, [injectSlice, sliceReady]);

    return sliceReady ? <Component {...props} /> : null;
  };
}
