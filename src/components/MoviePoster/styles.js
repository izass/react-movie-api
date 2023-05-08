import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  padding: 0.2rem;
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.grey};
    background-color: ${theme.colors.white};
  `}
`;

export const PosterImage = styled.img`
  width: 100%;
`;
