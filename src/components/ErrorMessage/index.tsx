import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <div className="error-message">
    <FontAwesomeIcon icon={faExclamationCircle} size="2x" />
    {message}
  </div>
);

export default ErrorMessage;
