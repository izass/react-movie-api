import React from "react";
import { MoveButton } from "../../styles";

const PageCell = ({ number, anchor, currentPage }) => {
  const selectedPage = number === currentPage;

  return (
    <MoveButton onClick={anchor} selected={selectedPage}>
      {number}
    </MoveButton>
  );
};

export { PageCell };
