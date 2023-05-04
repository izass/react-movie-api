import React from "react";
import { Container, IframeContainer } from "./styles";

const TrailerSection = ({ id }) => {
  return (
    <Container>
      <h2>Trailer</h2>
      <hr></hr>
      <IframeContainer>
        <iframe
          width="100%"
          height="360"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </IframeContainer>
    </Container>
  );
};

export { TrailerSection };
