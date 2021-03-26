import React from "react";
import PropTypes from "prop-types";
import Pagination from "rc-pagination";

const PaginationComponent = ({
  pageCount,
  handlePageClick,
  total,
  pageSize,
}) => {
  return (
    <Pagination
      onChange={handlePageClick}
      current={pageCount}
      total={total}
      pageSize={pageSize}
    />
  );
};

Pagination.propTypes = {
  pageCount: PropTypes.number,
  handlePageClick: PropTypes.func,
  total: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
};

export default PaginationComponent;
