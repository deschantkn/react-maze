import { useState, useEffect } from "react";

export const usePlayer = () => {
  const [player, updatePlayerPos] = useState({
    pos: { x: 0, y: 0 },
  });

  return [player, updatePlayerPos];
};
