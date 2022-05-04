import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="error-message" data-testid="error">
      <FontAwesomeIcon icon={faExclamationCircle} size="2x" />
      {message}
    </div>
  );
}
