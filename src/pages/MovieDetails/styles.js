import styled from "styled-components"

export const Container = styled.div`
  margin: 0 200px;
  padding: 0 20px;

  div:first-of-type {
    display: flex;
  }
`
export const PosterSection = styled.div`
  width: 30%;
  margin: 1.66%;

  img {
    width: 100%;
  }
`

export const InfoSection = styled.div`
  width: 60%;
  margin: 1.66%;

  h1, h2, h3, p, a {
    padding: 1rem;
  }

  a {
    color: aqua;
  }
`

export const TrailerSection = styled.div`
  margin: 1rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 1rem;
  }
`

