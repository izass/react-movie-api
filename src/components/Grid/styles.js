import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const Square = styled.div`
  width: 30%;
  float: left;
  margin: 1.66%;
`
export const Poster = styled(Link)`
  display: block;
  text-decoration: none;

  padding: 4px;
  line-height: 1.42857143;
  border: 1px solid #ddd;

  background-color: #fff;
  color: #000;

  img {
    width: 100%;
  }

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`
