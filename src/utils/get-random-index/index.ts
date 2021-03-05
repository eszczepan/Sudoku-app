/**
 * Random sudoku grid index from 0 - 8 range
 * @returns number from 0 to 8
 */
function getRandomIndex() {
  return Math.floor(Math.random() * 9)
}

export default getRandomIndex
