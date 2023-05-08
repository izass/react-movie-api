import styled, { css } from "styled-components";

const selectedPage = css`
  background-color: ${({ selected }) => selected ? 'white' : 'black'};
  color: ${({ selected }) => selected ? 'black' : 'white'};
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
`;

export const MoveButton = styled.button`
  border: none;
  font-size: 1.5rem;
  border-radius: 20px;
  padding: 5px;
  min-width: 40px;
  cursor: pointer;
  ${selectedPage}

  :hover:enabled {
    background-color: white;
    color: black;
  }

  :disabled {
    opacity: 0.5;
  }
`;

export const MoveButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const PagesContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: space-between;
`;