import styled, { css } from "styled-components";

export const StyledMazeWrapper = styled.div`
  ${(props) =>
    css`
      width: 100vw;
      height: 100vh;
      overflow: scroll;
    `}
`;

export const StyledMaze = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;
`;
