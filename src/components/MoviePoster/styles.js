import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  padding: 0.2rem;
  border: 1px solid #ddd;
  background-color: #fff;
`;

export const PosterImage = styled.img`
  width: 100%;
`;
