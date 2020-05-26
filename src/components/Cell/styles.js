import styled, { css } from "styled-components";

import player from "../../assets/player.png";
import sprite from "../../assets/sprite.png";

export const StyledCell = styled.div`
  ${({ type }) => css`
    width: auto;
    background: ${type === "player"
      ? `url(${player})`
      : type === "sprite"
      ? `url(${sprite})`
      : "transparent"};
    background-size: contain;
    border: 1px solid #333;
  `}
`;
