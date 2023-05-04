import { Container } from "./styles";

import LoadImage from "../../assets/gifs/play_movie_preview.gif";

const LoadingPage = () => {
  return (
    <Container>
      <img alt="loading" src={LoadImage} />
    </Container>
  );
};

export { LoadingPage };
