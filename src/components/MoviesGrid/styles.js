import styled, { css } from "styled-components";
import { responsive } from "../../design-system/responsive";

export const Container = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  ${responsive.desktop(css`
    grid-template-columns: repeat(4, 1fr);
  `)}
`;
