import styled, { css } from "styled-components";
import { responsive } from "../../design-system/responsive";

const selectedPage = css`
  background-color: ${({ selected }) => (selected ? "white" : "black")};
  color: ${({ selected }) => (selected ? "black" : "white")};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;

  ${responsive.desktop(css`
    margin: 2rem 0;
  `)}
`;

export const MoveButton = styled.button`
  border: none;
  font-size: 1rem;
  border-radius: 20px;
  padding: 5px;
  min-width: 30px;
  cursor: pointer;
  ${selectedPage}

  :hover:enabled {
    background-color: white;
    color: black;
  }

  :disabled {
    opacity: 0.5;
  }

  ${responsive.desktop(css`
    font-size: 1.5rem;
    min-width: 40px;
  `)}
`;

export const MoveButtonContainer = styled.div`
  display: flex;

  ${responsive.desktop(css`
    gap: 0.5rem;
  `)}
`;

export const PagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  ${responsive.mobile(css`
    gap: 0;
  `)}
`;
