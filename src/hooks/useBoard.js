import { useState, useEffect } from "react";

import { createBoard } from "../helpers";

export const useBoard = (width, height, player) => {
  const [board, setBoard] = useState(null);

  useEffect(() => {
    if (width && height) {
      console.log("whhhhat");
      const gameBoard = createBoard(width, height);

      // Place random sprites on the board
      for (let i = 0; i < width; i++) {
        const randomX = Math.floor(Math.random() * width);
        const randomY = Math.floor(Math.random() * height);
        gameBoard[randomX][randomY] = "sprite";
        gameBoard[player.pos.x][player.pos.y] = "player";
      }

      setBoard(gameBoard);
    }
  }, [width, height, player]);

  return [board, setBoard];
};
