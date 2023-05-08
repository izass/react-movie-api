import React from "react";
import { MoveButton, MoveButtonContainer } from "../../styles";

const BackSection = ({ goToPreviousPage, isInitialPage, goToFirstPage }) => {

  return (
    <MoveButtonContainer>
      <MoveButton onClick={goToFirstPage} disabled={isInitialPage}>
        {"<<"}
      </MoveButton>
      <MoveButton onClick={goToPreviousPage} disabled={isInitialPage}>
        {"<"}
      </MoveButton>
    </MoveButtonContainer>
  );
};

export { BackSection };
