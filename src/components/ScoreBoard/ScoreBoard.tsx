import { FC } from 'react'

import { useStyles } from './styles/useStyles'

import { ScoreBoardProps } from './utils/scoreBoard.types'

const ScoreBoard: FC<ScoreBoardProps> = ({ score }) => {
  const classes = useStyles()

  return (
    <h1 className={classes.root}>
      X: {score.X} | O: {score.O}
    </h1>
  )
}

export default ScoreBoard
