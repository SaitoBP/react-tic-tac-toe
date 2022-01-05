import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  grid: {
    display: 'grid',
    gridTemplateColumns: '25% auto 25%',
  },

  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gridColumn: '2',
  },

  board: {
    margin: '20px',
  },

  gridTitle: {
    gridColumn: '1 / 4',
  },

  boardOptions: {
    gridRow: '2',
    gridColumn: '1',

    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
})
