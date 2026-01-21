import { Box, Typography } from '@mui/material'
import { useGameStore } from '../../store/gameStore'

export const ScoreBoard = () => {
  const { score } = useGameStore()

  return (
    <Box display='flex' justifyContent='center' gap={4} mb={2}>
      <Typography>Player: {score.player}</Typography>
      <Typography>Computer: {score.computer}</Typography>
    </Box>
  )
}
