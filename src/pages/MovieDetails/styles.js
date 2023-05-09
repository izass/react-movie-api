import styled, { css } from "styled-components";
import { responsive } from "../../design-system/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 1rem;

  ${responsive.desktop(css`
    margin: 0 10rem;
  `)}
`;

export const MovieData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${responsive.desktop(css`
    display: grid;
    grid-template-columns: 1fr 2fr;
  `)}
`;
