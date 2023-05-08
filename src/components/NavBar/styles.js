import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

export const NavContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 1rem 0;

  ${({ theme }) => css`
    background: ${theme.colors.black};
    color: ${theme.colors.white};
  `}
  font-size: 1.3rem;
  font-weight: bold;
`;

export const Nav = styled(Link)`
  text-decoration: none;
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`;

export const InputSearch = styled.input`
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  border: none;
  padding: 0.6rem;
  width: 15rem;
`;

export const SearchButton = styled.button`
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border: none;
  padding: 0.6rem;
  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
  cursor: pointer;
`;
