import { useState } from "react";

export const usePlayer = (boardWidth, boardHeight) => {
  const [player, setPlayer] = useState({
    pos: {
      y: Math.floor(boardHeight / 2),
      x: Math.floor(boardWidth / 2),
    },
  });

  return [player, setPlayer];
};
