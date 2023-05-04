import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { Container } from "./styles";

const Pagination = ({ currentPage, totalPages }) => {
  const { param } = useParams();
  const history = useHistory();

  const goToPreviousPage = () => {
    const pageNumber = currentPage - 1;
    history.push(`/search/${param}?page=${pageNumber}`);
  };

  const goToNextPage = () => {
    const pageNumber = currentPage + 1;
    history.push(`/search/${param}?page=${pageNumber}`);
  };

  return (
    <Container>
      <div>
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          {"<"} Back
        </button>
      </div>
      <div>{currentPage}</div>
      <div>
        <button onClick={goToNextPage}>Next {">"}</button>
      </div>
    </Container>
  );
};

export { Pagination };
