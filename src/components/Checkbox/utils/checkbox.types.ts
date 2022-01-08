import { FC } from 'react'

export type ICheckbox = FC<ICheckBoxProps>

export interface ICheckBoxProps {
  id?: string
  name?: string
  label: string
}
