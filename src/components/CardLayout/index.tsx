import React from "react";
import "./style.scss";

export const CardLayout: React.FC = ({ children }) => {
  return (
    <article className="card-layout">
      {React.Children.map(children, child => (<>{ child }</>))}
    </article>
  );
};

export default CardLayout;
