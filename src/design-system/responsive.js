import { css } from "styled-components";

const breakPoints = {
  mobile: "575px",
  tablet: "991px",
  desktop: "992px",
};

export const responsive = {
  mobile: (...args) => css`
    @media (max-width: ${breakPoints.mobile}) {
      ${css(...args)};
    }
  `,
  tablet: (...args) => css`
    @media (min-width: ${breakPoints.mobile}) and (max-width: ${breakPoints.tablet}) {
      ${css(...args)};
    }
  `,
  desktop: (...args) => css`
    @media (min-width: ${breakPoints.desktop}) {
      ${css(...args)};
    }
  `,
};
