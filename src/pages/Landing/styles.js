import styled from "styled-components";

import backgroundImg from "../../assets/images/avengers-infinity-war3.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 5rem;
`;
export const Hero = styled.header`
  display: flex;
  align-items: flex-end;

  height: 700px;
  width: 100%;

  background: #000 url(${backgroundImg}) no-repeat center;
  background-size: contain;
`;

export const GradientContainer = styled.div`
  display: flex;
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
  margin-bottom: 4rem;
  font-weight: bold;
  text-shadow: 0.1em 0.1em 0.2em black;
  font-size: 5rem;
  text-transform: uppercase;
  text-align: center;
`;

export const MoviesList = styled.div`
  margin: 1rem;
`;
