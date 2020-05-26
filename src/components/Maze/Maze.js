import React, { useState, useEffect } from "react";

import { StyledMazeWrapper, StyledMaze } from "./styles";
import Board from "../Board/Board";
import { useBoard } from "../../hooks/useBoard";
import { usePlayer } from "../../hooks/usePlayer";

const Maze = () => {
  const [boardWidth, setBoardWidth] = useState(null);
  const [boardHeight, setBoardHeight] = useState(null);

  const [player, updatePlayerPos] = usePlayer(boardWidth, boardHeight);
  const [board, setBoard] = useBoard(boardWidth, boardHeight, player);

  const moveX = (dir) => {
    updatePlayerPos({ x: dir, y: 0 });
  };

  const moveY = (dir) => {
    updatePlayerPos({ x: 0, y: dir });
  };

  const move = ({ keyCode }) => {
    switch (keyCode) {
      case 37:
        moveX(-1);
        break;
      case 39:
        moveX(1);
        break;
      case 38:
        moveY(1);
        break;
      case 40:
        moveY(-1);
        break;
      default:
    }
  };

  useEffect(() => {
    if (!boardWidth || !boardHeight) {
      setBoardWidth(parseInt(prompt("Please enter board width")));
      setBoardHeight(parseInt(prompt("Please enter board height")));
    }
  }, [boardWidth, boardHeight]);

  console.log("re-render");
  console.log(board);
  return (
    <StyledMazeWrapper role="button" tabIndex="0" onKeyDown={(e) => move(e)}>
      <StyledMaze>{board && <Board board={board} />}</StyledMaze>
    </StyledMazeWrapper>
  );
};

export default Maze;
