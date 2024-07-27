import { Pagination } from "react-bootstrap";
import { useEffect } from "react";

interface CustomPaginationProps {
  pageSize: number;
  itemsCount: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({ pageSize, itemsCount, currentPage, setCurrentPage }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const isPaginationShown = pagesCount > 1;
  const isCurrentPageFirst = currentPage === 1;
  const isCurrentPageLast = currentPage === pagesCount;

  const changePage = (number: number) => {
    if (currentPage !== number) {
      setCurrentPage(number);
    }
  };

  const onPageNumberClick = (pageNumber: number) => {
    changePage(pageNumber);
  };

  const onPreviousPageClick = () => {
    if (!isCurrentPageFirst) {
      changePage(currentPage - 1);
    }
  };

  const onNextPageClick = () => {
    if (!isCurrentPageLast) {
      changePage(currentPage + 1);
    }
  };

  useEffect(() => {
    if (currentPage > pagesCount) {
      setCurrentPage(pagesCount);
    }
  }, [pagesCount, currentPage, setCurrentPage]);

  let isPageNumberOutOfRange = false;

  const pageNumbers = [...new Array(pagesCount)].map((_, index) => {
    const pageNumber = index + 1;
    const isPageNumberFirst = pageNumber === 1;
    const isPageNumberLast = pageNumber === pagesCount;
    const isCurrentPageWithinTwoPageNumbers = Math.abs(pageNumber - currentPage) <= 2;

    if (isPageNumberFirst || isPageNumberLast || isCurrentPageWithinTwoPageNumbers) {
      isPageNumberOutOfRange = false;
      return (
        <Pagination.Item
          key={pageNumber}
          onClick={() => onPageNumberClick(pageNumber)}
          active={pageNumber === currentPage}
        >
          {pageNumber}
        </Pagination.Item>
      );
    }

    if (!isPageNumberOutOfRange) {
      isPageNumberOutOfRange = true;
      return <Pagination.Ellipsis key={pageNumber} className="muted" />;
    }

    return null;
  });

  return (
    <>
      {isPaginationShown && (
        <Pagination>
          <Pagination.Prev onClick={onPreviousPageClick} disabled={isCurrentPageFirst} />
          {pageNumbers}
          <Pagination.Next onClick={onNextPageClick} disabled={isCurrentPageLast} />
        </Pagination>
      )}
    </>
  );
};

export default CustomPagination;
