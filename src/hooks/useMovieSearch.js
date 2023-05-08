import { useEffect, useState } from "react";
import { searchMovies } from "../services/api";
import { useNavigation } from "./useNavigation";

const useMovieSearch = () => {
  const { pageNumber, param } = useNavigation();
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [amount, setAmount] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { results, page, total_pages, total_results } =
          await searchMovies({ search: param, page: pageNumber });

        setMovies(results);
        setAmount(total_results);
        setTotalPages(total_pages);
        setCurrentPage(page);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

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
