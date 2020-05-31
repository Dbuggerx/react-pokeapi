import React, { FC } from "react";
import "./style.scss";

const CardLayout: FC = ({ children }) => {
  return (
    <div className="card-layout">
      <article className="card-layout__content">
        {React.Children.map(children, child => (
          <>{child}</>
        ))}
      </article>
    </div>
  );
};

export default CardLayout;
