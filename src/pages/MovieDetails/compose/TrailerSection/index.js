import React from "react";
import { Container, IframeContainer } from "./styles";
import { YOUTUBE_EMBED_HOST } from "../../../../constants/externalDataHosts";

const TrailerSection = ({ id }) => {
  const videoSrc = `${YOUTUBE_EMBED_HOST}/${id}`;

  return (
    <Container>
      <h2>Trailer</h2>
      <hr></hr>
      <IframeContainer>
        <iframe
          width="100%"
          height="360"
          src={videoSrc}
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </IframeContainer>
    </Container>
  );
};

export { TrailerSection };
