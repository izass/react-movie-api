import styled, { css } from "styled-components";
import { responsive } from "../../design-system/responsive";

export const Container = styled.div`
  margin: 0 1rem;

  ${responsive.desktop(css`
    margin: 0 5rem;
  `)}
`;
