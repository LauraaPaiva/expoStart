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

const cloneBoard = (board) => {
  return board.map((rows) => {
    return rows.map((field) => {
      return { ...field };
    });
  });
};

const getNeighbors = (board, row, column) => {
  const neighbors = [];
  const rows = [row - 1, row, row + 1];
  const columns = [column - 1, column, column + 1];
  rows.forEach((r) => {
    columns.forEach((c) => {
      const diferent = r !== row || c !== column;
      const validRow = r >= 0 && r < board.length;
      const validColumn = c >= 0 && c < board[0].length;
      if (diferent && validRow && validColumn) {
        neighbors.push(board[r][c]);
      }
    });
  });
  return neighbors;
};

const safeNeighborhood = (board, row, column) => {
  const safes = (result, neighbor) => result && !neighbor.mined;
  return getNeighbors(board, row, column).reduce(safes, true);
};

const openField = (board, row, column) => {
  const field = board[row][column];
  if (field.mined) {
    field.exploded = true;
  } else {
    field.opened = true;
    if (safeNeighborhood(board, row, column)) {
      getNeighbors(board, row, column).forEach((neighbor) => {
        openField(board, neighbor.row, neighbor.column);
      });
    } else {
      field.nearMines = getNeighbors(board, row, column).filter(
        (neighbor) => neighbor.mined
      ).length;
    }
  }
  return board;
};
const fields = (board) => [].concat(...board);

const hadExplosion = (board) =>
  fields(board).filter((field) => field.exploded).length > 0;

const pendding = (field) =>
  (field.mined && !field.flagged) || (!field.mined && !field.opened);

const wonGame = (board) => fields(board).filter(pendding).length === 0;

const showMines = (board) =>
  fields(board)
    .filter((field) => field.mined)
    .forEach((field) => (field.opened = true));

export {
  createMineBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
};
