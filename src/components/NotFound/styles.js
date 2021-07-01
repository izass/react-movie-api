import styled from 'styled-components'

import { device } from '../../globalStyles'


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 8rem 5rem 0;

  @media ${device.mobile} {
    margin: 5rem 1.5rem 0;
  }

  img {
    width: 100%;

    @media ${device.desktop} {
      width: 50%;
    }
  }

`