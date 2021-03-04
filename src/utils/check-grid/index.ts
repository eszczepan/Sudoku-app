import { GRID } from 'typings'

/**
 * A function to check if grid is full
 * @param grid A 9x9 sudoku grid
 */
function checkGrid(grid: GRID): boolean {
  return !grid.flat(1).includes(0)
}

export default checkGrid
