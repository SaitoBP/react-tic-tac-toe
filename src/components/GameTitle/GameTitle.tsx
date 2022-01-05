import { FC } from 'react'

import { useStyles } from './styles/useStyles'
import { GameTitleProps } from './utils/gameTitle.types'

const GameTitle: FC<GameTitleProps> = ({ className }) => {
  const classes = useStyles()

  return <h1 className={`${classes.root} ${className}`}>tic-tac-toe</h1>
}

GameTitle.defaultProps = {
  className: '',
}

export default GameTitle
