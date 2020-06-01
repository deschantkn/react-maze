export const createBoard = (height, width) => {
  // Create empty board
  const board = Array.from(new Array(width), () =>
    new Array(height).fill("empty")
  );

  // Place random sprites on the board
  for (let i = 0; i < height; i++) {
    const randomX = Math.floor(Math.random() * width);
    const randomY = Math.floor(Math.random() * height);
    board[randomX][randomY] = "sprite";
  }

  return board;
};

export const willGoOutOfBounds = (board, player, x, y) => {
  if (!board[player.pos.x + x] || !board[player.pos.y + y]) {
    return true;
  }

  return false;
};

export const willGetMushroom = (board, player, x, y) => {
  if (board[player.pos.y + y][player.pos.x + x] === "sprite") {
    return true;
  }

  return false;
};
