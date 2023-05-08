import { useMemo } from "react";
import { useNavigation } from "./useNavigation";

export const usePagination = (totalPages, currentPage) => {
  const { goToSearchPage } = useNavigation();

  const isInitialPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const goToFirstPage = () => {
    if (isInitialPage) return;

    goToSearchPage();
  };

  const goToLastPage = () => {
    if (isLastPage) return;

    goToSearchPage({ page: totalPages });
  };

  const goToPreviousPage = () => {
    if (isInitialPage) return;

    const page = currentPage - 1;
    goToSearchPage({ page });
  };

  const goToNextPage = () => {
    const page = currentPage + 1;
    goToSearchPage({ page });
  };

  const pages = useMemo(() => {
    const fillPagesArray = () => {
      const pagesArray = [];
      const pageAnchor = (page) => () => goToSearchPage({ page });

      for (let i = 0; i < totalPages; i++) {
        pagesArray.push({
          id: i,
          number: i + 1,
          anchor: pageAnchor(i + 1),
        });
      }

      return pagesArray;
    };

    return fillPagesArray();
  }, [goToSearchPage, totalPages]);

  return {
    goToFirstPage,
    goToLastPage,
    goToPreviousPage,
    goToNextPage,
    goToSearchPage,
    pages,
    isInitialPage,
    isLastPage,
  };
};
