import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    width: '200px',
    margin: '15px',
    padding: '15px',
    backgroundColor: 'transparent',
    border: '1px solid #F5F5F5',
    color: '#F5F5F5',
    fontSize: '1em',

    '&:hover': {
      cursor: 'pointer',
    },
  },
})
