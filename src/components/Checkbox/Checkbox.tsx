import { useStyles } from './styles/useStyles'
import { ICheckbox } from './utils/checkbox.types'

const Checkbox: ICheckbox = ({ id, name, label }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <input type='checkbox' name={name} id={id} className={classes.input} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default Checkbox
