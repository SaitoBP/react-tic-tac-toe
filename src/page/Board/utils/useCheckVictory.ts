import { useState } from 'react'

import { generateBoard } from './generateBoard'
import { checkForWin } from './checkForWin'

export const useCheckVictory = () => {
  const [board, setBoard] = useState<Array<any>>(generateBoard)
  const [isFinished, setIsFinished] = useState<boolean>(false)
  const [isTie, setIsTie] = useState<boolean>(false)
  const [winner, setWinner] = useState<string>('')
  const [player, setPlayer] = useState<'x' | 'o'>('x')
  const [score, setScore] = useState<{ playerX: number; playerO: number }>({
    playerX: 0,
    playerO: 0,
  })

  const onClick = () => {
    setBoard([...board])

    if (player === 'x') setPlayer('o')
    if (player === 'o') setPlayer('x')

    const results = checkForWin(board)

    if (results.tie) {
      setIsTie(true)
      setIsFinished(true)
    }

    if (!results.win) return

    setIsFinished(true)
    setWinner(results.player)

    if (results.player === 'x') setScore({ ...score, playerX: score.playerX + 1 })
    if (results.player === 'o') setScore({ ...score, playerO: score.playerO + 1 })
  }

  const resetBoard = () => {
    setBoard(generateBoard)
    setWinner('')
    setIsFinished(false)
  }

  return { board, onClick, winner, isFinished, resetBoard, score, player, isTie }
}
