import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.scss";

const LoadingSpinner: React.FC = () => (
  <div className="loading-spinner" data-testid="loading">
    <FontAwesomeIcon icon={faSpinner} size="4x" />
  </div>
);

export default LoadingSpinner;
