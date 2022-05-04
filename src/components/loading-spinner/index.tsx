import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

export default function LoadingSpinner() {
  return (
    <div className="loading-spinner" role="alert" aria-busy="true">
      <FontAwesomeIcon icon={faSpinner} size="4x" />
    </div>
  );
}
