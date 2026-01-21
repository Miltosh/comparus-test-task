import { Box, Button, Modal, Typography } from '@mui/material'
import { useGameStore } from '../../store/gameStore'

export const ResultModal = () => {
  const { isGameOver, winner, resetGame } = useGameStore()

  return (
    <Modal open={isGameOver}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          minWidth: 300,
          textAlign: 'center',
        }}
      >
        <Typography variant='h5' mb={2}>
          {winner === 'player' ? '🎉 You Win!' : '💻 Computer Wins'}
        </Typography>

        <Button variant='contained' onClick={resetGame}>
          Restart
        </Button>
      </Box>
    </Modal>
  )
}
