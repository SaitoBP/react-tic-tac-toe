import { useStyles } from './styles/useStyles'

const Tile = ({ id, board, player, onClick, isFinished }) => {
  const handleClick = () => {
    if (isFinished) return
    if (board[id[0]][id[1]] !== null) return

    board[id[0]][id[1]] = player

    onClick()
  }

  const classes = useStyles({ player })

  const Preview = () => {
    if (isFinished) return null
    if (board[id[0]][id[1]] !== null) return null

    return <span className={`${classes.player} ${classes.preview}`}>{player}</span>
  }

  return (
    <div className={classes.tile} onClick={handleClick}>
      <Preview />

      <span id='player' className={classes.player}>
        {board[id[0]][id[1]]}
      </span>
    </div>
  )
}

export default Tile
