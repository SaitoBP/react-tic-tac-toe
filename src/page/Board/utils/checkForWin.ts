export const checkForWin = (board: Array<any>) => {
  let diagonal: Array<Array<any>> = [[], []]

  for (let i: number = 0; i < board.length; i++) {
    let row: Array<any> = board[i]
    let column: Array<any> = []

    for (let j: number = 0; j < row.length; j++) {
      column.push(board[j][i])

      if (i === j) diagonal[0].push(board[i][j])
      if (i + j === 2) diagonal[1].push(board[i][j])
    }

    if (row.every(tile => tile === 'x')) return { win: true, player: 'x' }
    if (row.every(tile => tile === 'o')) return { win: true, player: 'o' }

    if (column.every(tile => tile === 'x')) return { win: true, player: 'x' }
    if (column.every(tile => tile === 'o')) return { win: true, player: 'o' }

    if (diagonal[0].length !== 3 || diagonal[1].length !== 3) continue

    if (diagonal[0].every(tile => tile === 'x')) return { win: true, player: 'x' }
    if (diagonal[0].every(tile => tile === 'o')) return { win: true, player: 'o' }

    if (diagonal[1].every(tile => tile === 'x')) return { win: true, player: 'x' }
    if (diagonal[1].every(tile => tile === 'o')) return { win: true, player: 'o' }
  }

  const rows = []
  board.forEach((row: Array<any>) => {
    rows.push(row.every(tile => tile !== null))
  })

  if (rows.every(row => row === true)) return { tie: true, win: false, player: '' }

  return { win: false, player: '' }
}
