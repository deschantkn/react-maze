import React, { useState, useEffect } from "react";

import { createBoard } from "../../helpers";

import { StyledMazeWrapper, StyledMaze } from "./styles";
import Board from "../Board/Board";
import { useBoard } from "../../hooks/useBoard";

const Maze = () => {
  const [boardWidth, setBoardWidth] = useState(null);
  const [boardHeight, setBoardHeight] = useState(null);
  const [board, setBoard] = useBoard(boardWidth, boardHeight);

  useEffect(() => {
    if (!boardWidth || !boardHeight) {
      setBoardWidth(parseInt(prompt("Please enter board width")));
      setBoardHeight(parseInt(prompt("Please enter board height")));
    }

    // if (boardWidth && boardWidth) {
    //   setBoard(createBoard(boardHeight, boardWidth));
    // }
  }, [boardWidth, boardHeight]);

  console.log("re-render");
  return (
    <StyledMazeWrapper role="button" tabIndex="0">
      <StyledMaze>{board && <Board board={board} />}</StyledMaze>
    </StyledMazeWrapper>
  );
};

export default Maze;
