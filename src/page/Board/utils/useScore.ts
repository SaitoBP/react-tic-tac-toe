import { useState } from 'react'

import { Scores } from '../../../components/ScoreBoard/utils/scoreBoard.types'

import { Players } from './board.types'

export const useScore = () => {
  const [score, setScore] = useState<Scores>({ X: 0, O: 0 })

  const addPoint = (player: Players) => {
    if (player === 'x') setScore({ ...score, X: score.X + 1 })
    if (player === 'o') setScore({ ...score, O: score.X + 1 })
  }

  return { score, addPoint }
}
