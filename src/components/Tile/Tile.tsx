import { useStyles } from './styles/useStyles'

const Tile = ({ id, position, player, onClick, isFinished }) => {
  const classes = useStyles({ player })

  const Preview = () => {
    if (isFinished) return null
    if (position !== null) return null

    return <span className={`${classes.player} ${classes.preview}`}>{player}</span>
  }

  return (
    <div id={id} className={classes.tile} onClick={onClick}>
      <Preview />

      <span id='player' className={classes.player}>
        {position}
      </span>
    </div>
  )
}

export default Tile
