import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px',
  },

  input: {
    appearance: 'none',
    marginRight: '.6em',
    width: '1.5em',
    height: '1.5em',
    backgroundColor: 'transparent',
    border: '1px solid white',

    '&:checked': {
      backgroundColor: '#50B2C0',
    },
  },
})
