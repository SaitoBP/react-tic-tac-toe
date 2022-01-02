import { createUseStyles } from 'react-jss'

import { Classes, Props } from '../utils/types'

export const useStyles = createUseStyles<Classes, Props>({
  tile: {
    width: '110px',
    height: '110px',
    border: '1px solid #F5F5F5',
    transition: '250ms',

    '&:hover': {
      cursor: 'pointer',
      // backgroundColor: '#1F1F1F',
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

  preview: {
    color: 'transparent',
    transition: '200ms',

    '&:hover': {
      color: '#50B2C0',
    },
  },
})
