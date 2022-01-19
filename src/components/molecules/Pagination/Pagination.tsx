import { useEffect } from "react";
import { PaginationButton } from "components/atoms/PaginationButton/PaginationButton";
import { useState } from "react";
import {
  StyledList,
  StyledChevronLeftIcon,
  StyledChevronRightIcon,
} from "./Pagination.styles";

interface Props {
  itemsNumber: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (arg0: number) => void;
}

const Pagination = ({
  currentPage,
  itemsNumber,
  itemsPerPage,
  onPageChange,
}: Props) => {
  if (itemsPerPage < 1) throw new Error("ItemsPerPage cant be less then 1");
  const [pages, setPages] = useState<number[]>([]);
  const [displayedPages, setDisplayedPages] = useState<number[]>([]);

  const dynamicDisplayedPagesNumber = 3;
  const displayedPagesNumber = dynamicDisplayedPagesNumber + 2;

  const setPreviousPage = () => {
    onPageChange(currentPage - 1);
  };
  const setNextPage = () => {
    onPageChange(currentPage + 1);
  };

  useEffect(() => {
    const indexBeforeActivePage = currentPage - 2;
    const PagesToDisplayNumber = Math.min(
      dynamicDisplayedPagesNumber,
      pages.length - 2
    );
    const secondPageIndex = 1;
    const lastPageIndex = pages.length - 1;
    const lastValidStartingIndex = lastPageIndex - dynamicDisplayedPagesNumber;

    const pagesToDisplayStartingIndex = Math.max(
      secondPageIndex,
      Math.min(indexBeforeActivePage, lastValidStartingIndex)
    );
    const copiedPages = [...pages];
    const pagesToDisplay = copiedPages.splice(
      pagesToDisplayStartingIndex,
      PagesToDisplayNumber
    );
    setDisplayedPages(pagesToDisplay);
  }, [currentPage, pages]);

  useEffect(() => {
    const numberOfPages = Math.ceil(itemsNumber / itemsPerPage);
    const pages = Array.from({ length: numberOfPages }, (_, i) => i + 1);
    setPages(pages);
  }, [itemsNumber, itemsPerPage]);

  if (pages.length < 2) {
    return null;
  }

  return (
    <StyledList>
      {currentPage > 1 && (
        <li>
          <PaginationButton hasIcon onClick={setPreviousPage}>
            <StyledChevronLeftIcon aria-label="Previous" />
          </PaginationButton>
        </li>
      )}
      <li>
        <PaginationButton
          isActive={1 === currentPage}
          onClick={() => onPageChange(1)}
        >
          1
        </PaginationButton>
      </li>
      {currentPage > 3 && pages.length > displayedPagesNumber && (
        <li>
          <PaginationButton disabled>...</PaginationButton>
        </li>
      )}

      {displayedPages.map((item) => (
        <li key={item}>
          <PaginationButton
            onClick={() => onPageChange(item)}
            isActive={item === currentPage}
          >
            {item}
          </PaginationButton>
        </li>
      ))}
      {currentPage < pages.length - 2 && pages.length > displayedPagesNumber && (
        <li>
          <PaginationButton disabled>...</PaginationButton>
        </li>
      )}
      <li>
        <PaginationButton
          isActive={pages.length === currentPage}
          onClick={() => onPageChange(pages.length)}
        >
          {pages.length}
        </PaginationButton>
      </li>
      {currentPage < pages.length && (
        <li>
          <PaginationButton hasIcon onClick={setNextPage}>
            <StyledChevronRightIcon aria-label="Next" />
          </PaginationButton>
        </li>
      )}
    </StyledList>
  );
};

export default Pagination;
