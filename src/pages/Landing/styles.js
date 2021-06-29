import styled from 'styled-components'

import backgroundImg from "./images/avengers-infinity-war3.jpg"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  margin: 0 8rem;
`
export const HeaderPoster = styled.header`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  height: 700px;
  width: 100%;

  background: #000 url(${backgroundImg}) no-repeat center;
  background-size: contain;

  .gradient {
    display: flex;
    justify-content: center;
    align-items: flex-end;

    height: 100%;
    width: 70%;
    background: radial-gradient(circle, rgba(255,255,255,.0) 70%, rgba(0,0,0) 90%);
  }

  h1 {
    margin-bottom: 4rem;

    font-weight: bold;
    text-shadow: 0.1em 0.1em 0.2em black;
    font-size: 5rem;
    text-transform: uppercase;
  }
`