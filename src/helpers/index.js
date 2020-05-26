export const createBoard = (height, width) => {
  console.log(height, width);
  return Array.from(Array(height), () => new Array(width).fill("empty"));
};
