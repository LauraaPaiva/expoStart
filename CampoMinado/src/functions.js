const createBoard = (rows, columns) => {
  return Array(rows)
    .fill(0)
    .map((_, row) => {
      return Array(columns)
        .fill(0)
        .map((_, column) => {
          return {
            row,
            column,
            oppened: false,
            flagged: false,
            mined: false,
            exploded: false,
            nearMines: 0,
          };
        });
    });
};

const spreadMines = (board, mimesAmount) => {
  const rows = board.length;
  const columns = board[0].length;
  let minesPlanted = 0;
  while (minesPlanted < mimesAmount) {
    const row = Math.floor(Math.random() * rows);
    const column = Math.floor(Math.random() * columns);
    if (!board[row][column].mined) {
      board[row][column].mined = true;
      minesPlanted++;
    }
  }
  return board;
};

const createMineBoard = (rows, columns, minesAmount) => {
  const board = createBoard(rows, columns);
  const mineBoard = spreadMines(board, minesAmount);
  return mineBoard;
};

export { createMineBoard };
