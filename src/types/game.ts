export type CellStatus =
  | 'idle' // default
  | 'active' // yellow
  | 'success' // green
  | 'fail' // red

export interface Cell {
  id: number
  status: CellStatus
}

export interface Score {
  player: number
  computer: number
}
