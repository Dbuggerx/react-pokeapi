import React from "react";
import "./style.scss";

export const CardLayout: React.FC = ({ children }) => {
  return (
    <article className="card-layout">
      <div className="card-layout__grid">
        {React.Children.map(children, child => (
          <>{child}</>
        ))}
      </div>
    </article>
  );
};

export default CardLayout;
