import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.scss";

type Props = {
  currentPage: number;
  pageCount: number;
  onPrev: () => void;
  onNext: () => void;
};

const Pagination: React.FC<Props> = props => (
  <div className="pagination">
    <div
      className="pagination__button-left"
      onClick={props.onPrev}
      data-testid="pagination-button-left"
    >
      <FontAwesomeIcon icon={faChevronRight} size="2x" />
    </div>
    <span data-testid="pagination-values">
      page {props.currentPage} of {props.pageCount}
    </span>
    <div
      className="pagination__button-right"
      onClick={props.onNext}
      data-testid="pagination-button-right"
    >
      <FontAwesomeIcon icon={faChevronRight} size="2x" />
    </div>
  </div>
);

export default Pagination;
