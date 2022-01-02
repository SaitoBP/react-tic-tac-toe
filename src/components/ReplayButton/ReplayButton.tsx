import { useStyles } from './styles/useStyles'

const ReplayButton = ({ onClick, isVisible }) => {
  const classes = useStyles()

  if (!isVisible) return null

  return (
    <button className={classes.root} onClick={onClick}>
      play again?
    </button>
  )
}

export default ReplayButton
