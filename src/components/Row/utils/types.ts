export interface Props {
  id: string
  row: number
  tiles?: number
  board: any
  player: any
  isFinished: boolean
  onClick: () => void
}
