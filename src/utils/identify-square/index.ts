import { GRID, SQUARE } from 'typings'

interface IInput {
  grid: GRID
  row: number
  col: number
}

/**
 * A function that identifies and returns the current square of a given sudoku grid at a row and column index
 * @param Input Object with 9x9 Sudoku grid, row index and column index
 */
function identifyWorkingSquare({ col, grid, row }: IInput): SQUARE {
  const square = []
  const colLowerLimit = col < 3 ? 0 : col < 6 ? 3 : 6
  const rowLowerLimit = row < 3 ? 0 : row < 6 ? 3 : 6

  let c = colLowerLimit
  for (let r = rowLowerLimit; r < rowLowerLimit + 3; r++) {
    square.push([grid[r][c], grid[r][c + 1], grid[r][c + 2]])
  }

  return square as SQUARE
}

export default identifyWorkingSquare
