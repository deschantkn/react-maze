import React, { useState, useEffect, useRef } from "react";

import Board from "../Board/Board";
import { StyledMazeWrapper, StyledMaze } from "./styles";
import { useBoard } from "../../hooks/useBoard";
import { usePlayer } from "../../hooks/usePlayer";
import { willGoOutOfBounds, willGetMushroom } from "../../helpers";

const boardWidth = parseInt(prompt("Please enter board width"));
const boardHeight = parseInt(prompt("Please enter board height"));

const Maze = () => {
  const [player, setPlayer] = usePlayer(boardWidth, boardHeight);
  const [board] = useBoard(boardWidth, boardHeight, player);
  const [steps, setSteps] = useState(0);
  const [mushrooms, setMushrooms] = useState(boardWidth);
  const mazeRef = useRef(null);

  const moveY = (dir) => {
    if (!willGoOutOfBounds(board, player, 0, dir)) {
      if (willGetMushroom(board, player, 0, dir)) {
        setMushrooms((prev) => prev - 1);
      }
      setPlayer((prev) => ({
        ...prev,
        pos: {
          y: (prev.pos.y += dir),
          x: (prev.pos.x += 0),
        },
      }));
    }
  };

  const moveX = (dir) => {
    if (!willGoOutOfBounds(board, player, dir, 0)) {
      if (willGetMushroom(board, player, dir, 0)) {
        setMushrooms((prev) => prev - 1);
      }
      setPlayer((prev) => ({
        ...prev,
        pos: {
          y: (prev.pos.y += 0),
          x: (prev.pos.x += dir),
        },
      }));
    }
  };

  const move = ({ keyCode }) => {
    setSteps((prev) => prev + 1);
    switch (keyCode) {
      case 38:
        moveY(-1);
        break;
      case 40:
        moveY(1);
        break;
      case 37:
        moveX(-1);
        break;
      case 39:
        moveX(1);
        break;
      default:
    }
  };

  useEffect(() => {
    if (mushrooms === 0) {
      alert(`Game over! Total moves to get all mushrooms: ${steps}`);
    }
  }, [mushrooms, steps]);

  useEffect(() => {
    // Focus the page so keyboard events can register
    mazeRef.current.focus();
  }, [mazeRef]);

  return (
    <StyledMazeWrapper
      ref={mazeRef}
      role="button"
      tabIndex="0"
      onKeyDown={(e) => move(e)}
    >
      <StyledMaze>{board && <Board board={board} />}</StyledMaze>
    </StyledMazeWrapper>
  );
};

export default Maze;
