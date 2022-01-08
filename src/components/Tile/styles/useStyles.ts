import { createUseStyles } from 'react-jss'

import { Classes, Props } from '../utils/types'

export const useStyles = createUseStyles<Classes, Props>({
  tile: {
    width: '110px',
    height: '110px',
    transition: '250ms',
    backgroundColor: '#141414',

    '&:hover': {
      cursor: 'pointer',
    },
  },

  player: {
    height: '100%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    fontSize: '4em',
    textTransform: 'uppercase',
  },

  preview: {
    color: 'transparent',
    transition: '200ms',

    '&:hover': {
      color: '#50B2C0',
    },
  },
})
