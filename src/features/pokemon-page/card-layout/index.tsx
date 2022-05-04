import React from "react";
import "./style.scss";

export default React.forwardRef<HTMLDivElement, { children: React.ReactNode }>(
  function CardLayout({ children }, ref) {
    return (
      <article className="card-layout" ref={ref}>
        <div className="card-layout__content">
          {React.Children.map(children, (child) =>
            React.cloneElement(child as React.ReactElement)
          )}
        </div>
      </article>
    );
  }
);
