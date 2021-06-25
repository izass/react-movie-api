import styled from 'styled-components'

import backgroundImg from "./images/avengers-infinity-war3.jpg"

export const Container = styled.div`
  height: 100%;
  margin: 0 300px;
`
export const HeaderPoster = styled.header`
  background-image: url(${backgroundImg});
  width: 1200px;
  height: 675px;
  display: block;

  h1 {
    justify-content: center;
    /* align-items: center; */
    display: flex;
    flex-wrap: wrap;
    padding-top: 600px;
  }
`