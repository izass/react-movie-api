import styled from "styled-components"

import { device } from "../../globalStyles"

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 15rem;

  @media ${device.mobile} {
    margin: 0 1rem;
    font-size: 0.8rem;
  }

  @media ${device.tablet} {
    margin: 0 2rem;
    font-size: 0.8rem;
  }

  div:first-of-type {
    display: flex;

    @media ${device.mobile} {
      flex-direction: column;
      align-items: center;

      width: 100%;
    }
  }
`
export const PosterSection = styled.div`
  width: 30%;
  margin: 1.66%;

  @media ${device.mobile} {
    width: 100%;
    margin: 0;
  }

  @media ${device.tablet} {
    width: 50%;
    margin: 0 0.5rem 0 0;
  }

  img {
    width: 100%;
  }
`

export const InfoSection = styled.div`
  width: 60%;
  margin: 1.66%;

  @media ${device.mobile} {
    width: 100%;
    margin: 0
  }

  @media ${device.tablet} {
    width: 45%;
    margin: 0;
  }

  h1, h2, h3, p, a {
    padding: 1rem 0 1rem 1rem;

    @media ${device.mobile} {
      margin-top: 0;
      margin-bottom: 0.5rem;
      padding: 0.3rem 0 0.3rem 1rem;
    }

    @media ${device.tablet} {
      padding: 0.3rem 0 0.3rem 1rem;
    }
  }

  a {
    color: aqua;
  }
`

export const TrailerSection = styled.div`
  margin: 1rem;

  @media ${device.mobile} {
    margin: 0 0.8rem 1rem;
  }

  @media ${device.tablet} {
    margin-top: -1rem;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    margin-top: 1rem;
  }
`

