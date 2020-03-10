import React from "react";
import "./style.scss";

const Footer: React.FC = ({ children }) => (
  <footer className="footer">
    {children}
    <a
      className="footer__info"
      href="https://www.linkedin.com/in/danilocestari"
      target="_blank"
      rel="noopener noreferrer"
    >
      Developed by <strong>Danilo Cestari</strong>
    </a>
  </footer>
);
export default Footer;
