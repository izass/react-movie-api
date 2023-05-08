import { usePagination } from "../../hooks/usePagination";
import { BackSection } from "./compose/BackSection";
import { NextSection } from "./compose/NextSection";
import { PagesDisplacer } from "./compose/PagesDisplacer";
import { Container } from "./styles";

const Pagination = ({ currentPage, totalPages }) => {
  const {
    goToFirstPage,
    goToLastPage,
    goToPreviousPage,
    goToNextPage,
    goToSearchPage,
    pages,
    isInitialPage,
    isLastPage,
  } = usePagination(totalPages, currentPage);

  return (
    <Container>
      <BackSection
        goToPreviousPage={goToPreviousPage}
        goToFirstPage={goToFirstPage}
        isInitialPage={isInitialPage}
      />
      <PagesDisplacer
        pages={pages}
        currentPage={currentPage}
        totalPages={totalPages}
        goToSearchPage={goToSearchPage}
      />
      <NextSection
        goToNextPage={goToNextPage}
        goToLastPage={goToLastPage}
        isLastPage={isLastPage}
      />
    </Container>
  );
};

export { Pagination };
