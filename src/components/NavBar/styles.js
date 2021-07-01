import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { device } from "../../globalStyles"

export const NavContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 1rem 0;
  width: 100%;

  background: #000;
  color: #fff;
  font-size: 1.3rem;
  font-weight: bold;

  @media ${device.mobile} {
    padding: 0.5rem 0;
  }

  @media ${device.tablet} {
    padding: 0.7rem 0;
  }
`

export const Nav = styled(Link)`
  text-decoration: none;
  color: #fff;
`

export const InputSearch = styled.input`
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  border: none;
  padding: 0.6rem;
  width: 15rem;

  @media ${device.mobile} {
    width: 7rem;
    padding: 0.3rem;
  }
`

export const SearchButton = styled.button`
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border: none;
  padding: 0.6rem;
  background: #fff;

  @media ${device.mobile} {
    padding: 0.3rem;
  }
`






