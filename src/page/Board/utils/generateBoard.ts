export const generateBoard = () => {
  let board = [[]]

  for (let i = 0; i < 3; i++) {
    if (board[i].length === 0 && i < 3 - 1) board.push([])

    for (let j = 0; j < 3; j++) {
      board[i][j] = null
    }
  }

  return board
}
