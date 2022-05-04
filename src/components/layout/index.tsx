import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../header";
import "./style.scss";

export default React.forwardRef<HTMLDivElement, { className?: string }>(
  function Layout({ className }, ref) {
    const navigate = useNavigate();
    return (
      <main className={`app-layout ${className ?? ""}`} ref={ref}>
        <header>
          <Header
            goBack={() => {
              navigate("/");
            }}
          />
        </header>

        <Outlet />
      </main>
    );
  }
);
