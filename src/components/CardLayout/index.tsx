import React from "react";
import "./style.scss";

const CardLayout: React.FC = ({ children }) => {
  return (
    <div className="card-layout">
      <article className="card-layout__content">
        {React.Children.map(children, child =>
          React.cloneElement(child as React.ReactElement)
        )}
      </article>
    </div>
  );
};

export default CardLayout;
