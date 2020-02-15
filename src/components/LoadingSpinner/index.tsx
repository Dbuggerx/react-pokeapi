import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const LoadingSpinner: React.FC = () => (
  <div className="loading-spinner">
    <FontAwesomeIcon icon={faSpinner} size="4x" />
  </div>
);

export default LoadingSpinner;
