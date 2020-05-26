import styled, { css } from "styled-components";

export const StyledBoard = styled.div`
  ${({ height, width }) =>
    css`
      display: grid;
      grid-template-rows: repeat(${height}, calc(25vw / 10));
      grid-template-columns: repeat(${width}, calc(25vw / 10));
      border: 1px solid #333;
    `}
`;
