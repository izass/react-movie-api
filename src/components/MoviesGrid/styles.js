import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { device } from '../../globalStyles'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`
export const Square = styled.div`
  width: 25%;
  margin: 1.5rem 2.66%;

  @media ${device.mobile} {
    width: 45%;
    margin: 0.5rem;
  }
`
export const Poster = styled(Link)`
  display: block;
  text-decoration: none;

  padding: 0.2rem;
  border: 1px solid #ddd;

  background-color: #fff;

  img {
    width: 100%;
    margin-bottom: -0.2rem;
  }
`
