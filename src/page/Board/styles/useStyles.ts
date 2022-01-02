import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  board: {
    margin: '20px',
  },

  title: {
    fontSize: '3.5em',
    fontWeight: '200',
    textAlign: 'center',
  },

  scoreBoard: {
    textAlign: 'center',
  },
})
