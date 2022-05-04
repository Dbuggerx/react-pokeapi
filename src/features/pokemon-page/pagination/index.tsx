import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

type Props = {
  currentPage: number;
  pageCount: number;
  onPrev: () => void;
  onNext: () => void;
};

export default function Pagination(props: Props) {
  return (
    <nav className="pagination">
      <button
        className="pagination__button-left"
        onClick={props.onPrev}
        title="Previous"
      >
        <FontAwesomeIcon icon={faChevronRight} size="2x" />
      </button>
      <span data-testid="pagination-values">
        page {props.currentPage} of {props.pageCount}
      </span>
      <button
        className="pagination__button-right"
        onClick={props.onNext}
        title="Next"
      >
        <FontAwesomeIcon icon={faChevronRight} size="2x" />
      </button>
    </nav>
  );
}
