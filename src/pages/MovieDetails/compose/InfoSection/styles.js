import styled, { css } from "styled-components";

export const Container = styled.div`
  a {
    ${({ theme }) => css`
      color: ${theme.colors.aquaBlue};
    `};
  }
`;
