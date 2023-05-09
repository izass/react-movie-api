import styled, { css } from "styled-components";

import backgroundImg from "../../assets/images/avengers-infinity-war3.jpg";
import { responsive } from "../../design-system/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;

  ${responsive.desktop(css`
    margin: 0 5rem;
  `)}
`;
export const Hero = styled.header`
  display: flex;
  align-items: flex-end;

  height: 700px;
  width: 100%;

  background: #000 url(${backgroundImg}) no-repeat center;
  background-size: contain;

  ${responsive.mobile(css`
    height: 220px;
  `)}

  ${responsive.tablet(css`
    height: 375px;
  `)}
`;

export const GradientContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  height: 100%;
  width: 100%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0) 55%,
    rgba(0, 0, 0) 70%
  );
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
  font-weight: bold;
  text-shadow: 0.1em 0.1em 0.2em black;
  font-size: 5rem;
  text-transform: uppercase;
  text-align: center;

  ${responsive.mobile(css`
    font-size: 1.5rem;
  `)}

  ${responsive.tablet(css`
    font-size: 3rem;
  `)}

  ${responsive.desktop(css`
    margin-bottom: 4rem;
  `)}
`;

export const MoviesList = styled.div`
  margin: 1rem 0;

  ${responsive.desktop(css`
    margin: 1rem;
  `)}
`;
