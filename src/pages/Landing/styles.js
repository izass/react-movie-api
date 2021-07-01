import styled from 'styled-components'

import { device } from "../../globalStyles"
import backgroundImg from "./images/avengers-infinity-war3.jpg"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  margin: 0;

  @media ${device.desktop} {
    margin: 0 8rem;
  }
`
export const HeaderPoster = styled.header`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  height: 700px;
  width: 100%;

  background: #000 url(${backgroundImg}) no-repeat center;
  background-size: contain;

  @media ${device.mobile} {
    height: 200px;
  }

  @media ${device.tablet} {
    height: 300px;
  }

  .gradient {
    display: flex;
    justify-content: center;
    align-items: flex-end;

    height: 100%;
    width: 100%;
    background: radial-gradient(circle, rgba(255,255,255,.0) 55%, rgba(0,0,0) 70%);
  }

  h1 {
    margin-bottom: 4rem;

    font-weight: bold;
    text-shadow: 0.1em 0.1em 0.2em black;
    font-size: 5rem;
    text-transform: uppercase;

    @media ${device.mobile} {
      margin-bottom: 1rem;

      font-size: 2rem;
    }

    @media ${device.tablet} {
      margin-bottom: 1rem;

      font-size: 2rem;
    }
  }
`