import { useEffect, useState } from "react";
import { searchMovies } from "../services/api";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useQuery } from "./useQuery";

const useMovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [amount, setAmount] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);

  const { param } = useParams();
  const query = useQuery();
  const pageNumber = query.get("page");

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const { results, page, total_pages, total_results } =
          await searchMovies({ param, page: pageNumber });

        setMovies(results.slice(0, 9));
        setAmount(total_results);
        setTotalPages(total_pages);
        setCurrentPage(page);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [param, pageNumber]);

  return {
    isLoading,
    movies,
    hasError,
    currentPage,
    amount,
    totalPages,
  };
};

export { useMovieSearch };
