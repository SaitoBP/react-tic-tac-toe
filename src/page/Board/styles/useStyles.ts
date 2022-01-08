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
    display: 'grid',
    gap: '3px',
    backgroundColor: 'white',
    margin: '20px',
  },

  gridTitle: {
    gridColumn: '1 / 4',
  },

  boardOptionsContainer: {
    gridRow: '2',
    gridColumn: '1',

    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },

  boardOptions: {
    display: 'flex',
    flexDirection: 'column',
  },

  actions: {
    gridRow: '3',
    gridColumn: '2',
    justifySelf: 'center',
  },
})
