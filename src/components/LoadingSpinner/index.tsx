import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const LoadingSpinner: FC = () => (
  <div className="loading-spinner" data-testid="loading">
    <FontAwesomeIcon icon={faSpinner} size="4x" />
  </div>
);

export default LoadingSpinner;
