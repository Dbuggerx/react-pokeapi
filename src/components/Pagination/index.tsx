import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

type Props = {
  currentPage: number;
  pageCount: number;
  onPrev: () => void;
  onNext: () => void;
};

const Pagination: React.FC<Props> = props => (
  <div className="pagination">
    <div className="pagination__button-left" onClick={props.onPrev}>
      <FontAwesomeIcon icon={faChevronRight} size="2x" />
    </div>
    page {props.currentPage} of {props.pageCount}
    <div className="pagination__button-right" onClick={props.onNext}>
      <FontAwesomeIcon icon={faChevronRight} size="2x" />
    </div>
  </div>
);

export default Pagination;
