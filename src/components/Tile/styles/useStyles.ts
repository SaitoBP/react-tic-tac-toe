import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  tile: {
    width: '110px',
    height: '110px',
    border: '1px solid #F5F5F5',

    '&:hover': {
      cursor: 'pointer',
    },
  },

  player: {
    height: '100%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    fontSize: '3em',
    textTransform: 'uppercase',
  },
})
