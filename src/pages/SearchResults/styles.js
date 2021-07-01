import styled from "styled-components"
import { device } from "../../globalStyles"

export const Container = styled.div`
  height: 100%;
  margin: 0;

  @media ${device.desktop} {
    margin: 0 5rem;
  }
`