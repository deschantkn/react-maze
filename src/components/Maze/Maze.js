import React, { useState, useEffect } from "react";

import { createBoard } from "../../helpers";

import { StyledMazeWrapper, StyledMaze } from "./styles";
import Board from "../Board/Board";
import { useBoard } from "../../hooks/useBoard";
import { usePlayer } from "../../hooks/usePlayer";

const Maze = () => {
  const [boardWidth, setBoardWidth] = useState(null);
  const [boardHeight, setBoardHeight] = useState(null);
  const [player, updatePlayerPos] = usePlayer();
  const [board, setBoard] = useBoard(boardWidth, boardHeight, player);

  useEffect(() => {
    if (!boardWidth || !boardHeight) {
      setBoardWidth(parseInt(prompt("Please enter board width")));
      setBoardHeight(parseInt(prompt("Please enter board height")));
    }

    if (boardHeight && boardWidth) {
      updatePlayerPos({
        pos: { x: Math.floor(boardWidth / 2), y: Math.floor(boardHeight / 2) },
      });
    }
  }, [boardWidth, boardHeight, updatePlayerPos]);

  console.log("re-render");
  return (
    <StyledMazeWrapper role="button" tabIndex="0">
      <StyledMaze>{board && <Board board={board} />}</StyledMaze>
    </StyledMazeWrapper>
  );
};

export default Maze;
