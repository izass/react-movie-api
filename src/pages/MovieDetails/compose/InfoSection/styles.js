import styled, { css } from "styled-components";
import { responsive } from "../../../../design-system/responsive";

export const Container = styled.div`
  ${responsive.tablet(css`
    font-size: 1.5rem;
  `)}

  a {
    ${({ theme }) => css`
      color: ${theme.colors.aquaBlue};
    `};
  }
`;
