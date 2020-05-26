import { useState, useEffect } from "react";

import { createBoard } from "../helpers";

export const useBoard = (width, height) => {
  const [board, setBoard] = useState(null);

  useEffect(() => {
    if (width && height) {
      const initialBoard = createBoard(width, height);

      for (let i = 0; i < width; i++) {
        const randomX = Math.floor(Math.random() * width);
        const randomY = Math.floor(Math.random() * height);
        initialBoard[randomX][randomY] = "sprite";
      }

      setBoard(initialBoard);
    }
  }, [width, height]);

  return [board, setBoard];
};
