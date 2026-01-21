import { Container, Typography } from '@mui/material'
import { GameGrid } from './components/GameGrid/GameGrid'
import { ControlPanel } from './components/ControlPanel/ControlPanel'
import { ScoreBoard } from './components/ScoreBoard/ScoreBoard'
import { ResultModal } from './components/ResultModal/ResultModal'

function App() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant='h4' align='center' gutterBottom>
        Interactive Mini-Game
      </Typography>

      <ScoreBoard />
      <ControlPanel />
      <GameGrid />
      <ResultModal />
    </Container>
  )
}

export default App
