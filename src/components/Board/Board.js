import React from "react";
import { StyledBoard } from "./styles";
import Cell from "../Cell/Cell";

const Board = ({ board }) => {
  return (
    <StyledBoard width={board[0].length} height={board.length}>
      {board.map((row) => row.map((cell, x) => <Cell key={x} type={cell} />))}
    </StyledBoard>
  );
};

export default Board;
