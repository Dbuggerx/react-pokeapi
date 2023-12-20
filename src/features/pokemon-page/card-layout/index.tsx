import React from "react";
import "./style.scss";

export default function CardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="card-layout">
      <div className="card-layout__content">{children}</div>
    </article>
  );
}
