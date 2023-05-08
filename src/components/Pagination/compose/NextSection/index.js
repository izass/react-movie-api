import React from "react";
import { MoveButton, MoveButtonContainer } from "../../styles";

const NextSection = ({ goToNextPage, goToLastPage, isLastPage }) => {

  return (
    <MoveButtonContainer>
      <MoveButton onClick={goToNextPage} disabled={isLastPage}>
        {">"}
      </MoveButton>
      <MoveButton onClick={goToLastPage} disabled={isLastPage}>
        {">>"}
      </MoveButton>
    </MoveButtonContainer>
  );
};

export { NextSection };
