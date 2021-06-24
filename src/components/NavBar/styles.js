import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const NavContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 5rem;
  width: 100%;

  background: #000;
  color: #fff;
  font-size: 1.3rem;
  font-weight: bold;
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
`

export const SearchButton = styled.button`
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border: none;
  padding: 0.6rem;
  background: #fff;
`






