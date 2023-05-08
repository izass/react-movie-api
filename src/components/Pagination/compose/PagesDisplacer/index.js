import React from "react";
import { PagesContainer } from "../../styles";
import { PageCell } from "../PageCell";

const PagesDisplacer = ({ currentPage, pages }) => {
  return (
    <PagesContainer>
      {pages?.map(({ id, number, anchor }) => (
        <PageCell
          key={id}
          onClick={anchor}
          number={number}
          currentPage={currentPage}
        />
      ))}
    </PagesContainer>
  );
};

export { PagesDisplacer };
