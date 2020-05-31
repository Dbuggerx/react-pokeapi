import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const ErrorMessage: FC<{ message: string }> = ({ message }) => (
  <div className="error-message" data-testid="error">
    <FontAwesomeIcon icon={faExclamationCircle} size="2x" />
    {message}
  </div>
);

export default ErrorMessage;
