import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: block;
  text-decoration: none;

  padding: 0.2rem;
  border: 1px solid #ddd;

  background-color: #fff;

  img {
    width: 100%;
    margin-bottom: -0.2rem;
  }
`;
