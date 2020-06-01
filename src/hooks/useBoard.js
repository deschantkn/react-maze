import { useState, useEffect } from "react";

import { createBoard } from "../helpers";

export const useBoard = (width, height, player) => {
  const [board, setBoard] = useState(createBoard(width, height));

  useEffect(() => {
    const updateBoard = (prevBoard) => {
      const updatedBoard = prevBoard.map((row) =>
        row.map((cell) =>
          cell === "empty" || cell === "player" ? "empty" : cell
        )
      );
      updatedBoard[player.pos.y][player.pos.x] = "player";

      return updatedBoard;
    };

    setBoard((prev) => updateBoard(prev));
  }, [player.pos.x, player.pos.y]);

  return [board, setBoard];
};
