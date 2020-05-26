import { useState, useEffect } from "react";

export const usePlayer = (boardWidth, boardHeight) => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
  });

  const updatePlayerPos = ({ x, y }) => {
    setPlayer((prev) => {
      const updated = {
        ...prev,
        pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      };

      return updated;
    });
  };

  useEffect(() => {
    if (boardWidth && boardHeight) {
      // Place player roughly in the middle when game starts
      const x = Math.floor(boardWidth / 2);
      const y = Math.floor(boardHeight / 2);

      setPlayer({ pos: { x, y } });
    }
  }, [boardHeight, boardWidth]);

  return [player, updatePlayerPos];
};
