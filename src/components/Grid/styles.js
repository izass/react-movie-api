import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
`
export const Square = styled.div`
  width: 30%;
  margin: 0 1.66% 1.66% 0;
`
export const Poster = styled(Link)`
  display: block;
  text-decoration: none;

  padding: 0.2rem;
  border: 1px solid #ddd;

  background-color: #fff;
  color: #000;

  img {
    width: 100%;
    margin-bottom: -0.2rem;
  }
`
