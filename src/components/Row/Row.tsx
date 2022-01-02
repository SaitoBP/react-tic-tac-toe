import { FC } from 'react'

import Tile from '../Tile/Tile'

import { useStyles } from './styles/useStyles'
import { Props } from './utils/types'

const Row: FC<Props> = ({ row, board, onClick, player }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {board.map((_, i) => (
        <Tile
          key={`tile[${row}, ${i}]`}
          id={[row, i]}
          board={board}
          player={player}
          onClick={onClick}
        />
      ))}
    </div>
  )
}

Row.defaultProps = {
  tiles: 10,
}

export default Row