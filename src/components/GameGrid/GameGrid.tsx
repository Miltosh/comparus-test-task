import { Box } from '@mui/material'
import { useGameStore } from '../../store/gameStore'
import { Cell } from '../../types/game'

const getCellColor = (status: Cell['status']) => {
  switch (status) {
    case 'active':
      return '#FFD54F' // yellow
    case 'success':
      return '#66BB6A' // green
    case 'fail':
      return '#EF5350' // red
    default:
      return '#42A5F5' // blue
  }
}

export const GameGrid = () => {
  const { cells, handleCellClick } = useGameStore()

  return (
    <Box
      display='grid'
      gridTemplateColumns='repeat(10, 1fr)'
      gap={1}
      maxWidth={400}
      margin='0 auto'
    >
      {cells.map((cell) => (
        <Box
          key={cell.id}
          width='100%'
          paddingTop='100%'
          position='relative'
          sx={{
            backgroundColor: getCellColor(cell.status),
            cursor: 'pointer',
            borderRadius: 1,
            transition: 'background-color 0.2s ease',
          }}
          onClick={() => handleCellClick(cell.id)}
        />
      ))}
    </Box>
  )
}
