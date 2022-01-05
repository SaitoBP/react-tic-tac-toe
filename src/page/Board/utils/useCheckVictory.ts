import { useState } from 'react'

import { generateBoard } from './generateBoard'
import { checkForWin } from './checkForWin'
import { UseCheckVictory } from './board.types'

export const useCheckVictory = (addPoint: UseCheckVictory) => {
  const [board, setBoard] = useState<Array<any>>(generateBoard)
  const [isFinished, setIsFinished] = useState<boolean>(false)
  const [isTie, setIsTie] = useState<boolean>(false)
  const [winner, setWinner] = useState<string>('')
  const [player, setPlayer] = useState<'x' | 'o'>('x')

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

    addPoint(player)
  }

  const resetBoard = () => {
    setBoard(generateBoard)
    setWinner('')
    setIsFinished(false)
  }

  return { board, onClick, winner, isFinished, resetBoard, player, isTie }
}
