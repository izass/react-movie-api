import styled, { css } from "styled-components";

import { Link } from "react-router-dom";
import { responsive } from "../../design-system/responsive";

export const NavContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0;
  font-size: 1.3rem;
  font-weight: bold;

  ${({ theme }) => css`
    background: ${theme.colors.black};
    color: ${theme.colors.white};
  `}

  ${responsive.mobile(css`
    font-size: 1rem;
  `)}
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

  ${responsive.mobile(css`
    width: 10rem;
  `)}
`;

export const SearchButton = styled.button`
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border: none;
  padding: 0.6rem;
  cursor: pointer;

  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`;
