import { MoviesGrid } from "../../components/MoviesGrid";
import { LoadingPage } from "../../components/LoadingPage";

import { Container } from "./styles.js";
import { useMovieSearch } from "../../hooks/useMovieSearch";
import { Pagination } from "../../components/Pagination";

const SearchResults = () => {
  const { isLoading, movies, amount, currentPage, totalPages } =
    useMovieSearch();

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <Container>
      <div>{amount} resultados</div>
      <MoviesGrid moviesList={movies} />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </Container>
  );
};

export { SearchResults };
