import { createUseStyles } from 'react-jss'

import { Classes, Props } from '../utils/types'

export const useStyles = createUseStyles<Classes, Props>({
  victoryText: {
    display: props => (props.isVisible ? 'block' : 'none'),
    textAlign: 'center',
  },
})
