import { FC } from 'react'

import Tile from '../Tile/Tile'

import { useStyles } from './styles/useStyles'
import { Props } from './utils/types'

const Row: FC<Props> = ({ row, board, onClick, player, id, isFinished }) => {
  const classes = useStyles()

  return (
    <div className={classes.root} id={id}>
      {board.map((_, i) => (
        <Tile
          key={`tile[${row}, ${i}]`}
          id={[row, i]}
          board={board}
          player={player}
          onClick={onClick}
          isFinished={isFinished}
        />
      ))}
    </div>
  )
}

Row.defaultProps = {
  tiles: 10,
}

export default Row
