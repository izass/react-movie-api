import styled, { css } from "styled-components";
import { responsive } from "../../design-system/responsive";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 8rem 5rem 0;
`;

export const Image = styled.img`
  width: 100%;

  ${responsive.desktop(css`
    width: 50%;
  `)}
`;
