import { Box, Button, TextField } from '@mui/material'
import { useGameStore } from '../../store/gameStore'

export const ControlPanel = () => {
  const { startGame, setTimeLimit, timeLimit, isRunning } = useGameStore()
  const isValidTime = timeLimit >= 500 && timeLimit <= 5000
  return (
    <Box display='flex' gap={2} justifyContent='center' alignItems='flex-start' mb={3}>
      <TextField
        label='Time (ms)'
        type='number'
        value={timeLimit}
        error={!isValidTime}
        helperText={(() => {
          if (timeLimit < 500) return 'Minimum 500 ms'
          if (timeLimit > 5000) return 'Maximum 5000 ms'
          return ' '
        })()}
        onChange={(e) => setTimeLimit(Number(e.target.value))}
        disabled={isRunning}
        size='small'
      />

      <Button variant='contained' onClick={startGame} disabled={isRunning || !isValidTime}>
        Start
      </Button>
    </Box>
  )
}
