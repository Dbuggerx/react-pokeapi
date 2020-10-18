import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.scss";

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <div className="error-message" data-testid="error">
    <FontAwesomeIcon icon={faExclamationCircle} size="2x" />
    {message}
  </div>
);

export default ErrorMessage;
