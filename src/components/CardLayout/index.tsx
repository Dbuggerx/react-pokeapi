import React from "react";
import "./style.scss";

const CardLayout = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<unknown>
>(({ children }, ref) => (
  <div className="card-layout" ref={ref}>
    <article className="card-layout__content">
      {React.Children.map(children, child =>
        React.cloneElement(child as React.ReactElement)
      )}
    </article>
  </div>
));

export default CardLayout;
