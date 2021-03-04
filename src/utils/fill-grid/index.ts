import { GRID, NUMBERS } from 'typings'
import { isInRow, isInCol, isInSquare, identifySquare, shuffle } from 'utils'

const gridExample: GRID = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
]

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * A backtracking/recursive function to check all the posiible combinations of numbers a solution is found
 * @param grid 9X9 Sudoku Grid
 */

function fillGrid(grid: GRID) {
  let row = 0
  let col = 0

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9)
    col = i % 9

    if (grid[row][col] === 0) {
      shuffle(numbers)
      for (let value of numbers) {
        // is it not in grid row?
        if (!isInRow({ grid, row, value })) {
          // is it not in grid col?
          if (!isInCol({ col, grid, value })) {
            // is it not in the grid square?
            const square = identifySquare({ col, grid, row })
            if (!isInSquare({ square, value }))
              // ....
              grid[row][col] = value
            // check grid if it is full, if yes stop and return true
            // otherwise we run fillGrid(grid)
          }
        }
      }
      break
    }

    grid[row][col] = 0
  }
}

export default fillGrid
