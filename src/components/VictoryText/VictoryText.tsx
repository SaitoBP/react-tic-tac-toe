import { FC } from 'react'

import { Props } from './utils/types'
import { useStyles } from './styles/useStyles'

const VictoryText: FC<Props> = props => {
  const { winner, isTie } = props

  const classes = useStyles(props)

  return (
    <h1 className={classes.victoryText}>{isTie ? 'Empate' : `${winner.toUpperCase()} won!`}</h1>
  )
}

export default VictoryText
