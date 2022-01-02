import { useStyles } from './styles/useStyles'

const Tile = ({ id, board, player, onClick }) => {
  const handleClick = () => {
    if (board[id[0]][id[1]] !== null) return

    board[id[0]][id[1]] = player

    onClick()
  }

  const classes = useStyles()

  return (
    <div className={classes.tile} onClick={handleClick}>
      <span className={classes.player}>{board[id[0]][id[1]]}</span>
    </div>
  )
}

export default Tile
