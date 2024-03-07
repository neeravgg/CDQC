import React from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
import './styles.css';

interface PaginationProps {
  pageCount: number;
  handlePageClick: ReactPaginateProps['onPageChange'];
}

const Pagination: React.FC<PaginationProps> = ({ pageCount, handlePageClick }) => {
  return (
    <div className="paginate">
      <ReactPaginate
        previousLabel={'← Previous'}
        nextLabel={'Next →'}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        previousLinkClassName={'pagination__link'}
        nextLinkClassName={'pagination__link'}
        disabledClassName={'pagination__link--disabled'}
        activeClassName={'pagination__link--active'}
      />
    </div>
  );
};

export default Pagination;
