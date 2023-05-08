import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { useQuery } from "./useQuery";

export const useNavigation = () => {
  const { param } = useParams();
  const history = useHistory();
  const query = useQuery();

  const pageNumber = query.get("page");

  const goToSearchPage = ({ page = 1, search = param } = {}) => {
    history.push(`/search/${search}?page=${page}`);
  };

  return {
    goToSearchPage,
    param,
    pageNumber
  };
};
