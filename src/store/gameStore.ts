import { create } from 'zustand'
import { Cell, Score } from '../types/game'
import { getRandomCellIndex } from '../utils/randomCell'

let timeoutId: number | null = null

const GRID_SIZE = 100
const WIN_SCORE = 10

type Winner = 'player' | 'computer' | null

interface GameState {
  cells: Cell[]
  score: Score
  isRunning: boolean
  isGameOver: boolean
  winner: Winner
  timeLimit: number
  activeCellId: number | null

  setTimeLimit: (ms: number) => void
  startGame: () => void
  nextRound: () => void
  handleCellClick: (cellId: number) => void
  endRoundFail: () => void
  resetGame: () => void
}

export const useGameStore = create<GameState>((set, get) => ({
  cells: Array.from({ length: GRID_SIZE }, (_, i) => ({
    id: i,
    status: 'idle',
  })),

  score: { player: 0, computer: 0 },
  isRunning: false,
  isGameOver: false,
  winner: null,
  timeLimit: 1000,
  activeCellId: null,

  setTimeLimit: (ms) => set({ timeLimit: ms }),

  startGame: () => {
    const { timeLimit } = get()
    const normalized = Math.max(500, Math.min(timeLimit, 5000))
    set({ timeLimit: normalized })

    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }

    set({
      cells: Array.from({ length: GRID_SIZE }, (_, i) => ({
        id: i,
        status: 'idle',
      })),
      score: { player: 0, computer: 0 },
      isRunning: true,
      isGameOver: false,
      winner: null,
      activeCellId: null,
    })

    get().nextRound()
  },

  nextRound: () => {
    const { cells, timeLimit, isRunning, isGameOver } = get()
    if (!isRunning || isGameOver) return

    const availableCells = cells.filter((c) => c.status === 'idle').map((c) => c.id)

    if (!availableCells.length) return

    const randomId = getRandomCellIndex(availableCells)

    set({
      cells: cells.map((c) => (c.id === randomId ? { ...c, status: 'active' } : c)),
      activeCellId: randomId,
    })

    timeoutId = window.setTimeout(() => {
      get().endRoundFail()
    }, timeLimit)
  },

  handleCellClick: (cellId) => {
    const { activeCellId, cells, score, isRunning, isGameOver } = get()

    if (!isRunning || isGameOver) return
    if (cellId !== activeCellId) return

    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }

    const newPlayerScore = score.player + 1

    if (newPlayerScore >= WIN_SCORE) {
      set({
        cells: cells.map((c) => (c.id === cellId ? { ...c, status: 'success' } : c)),
        score: { ...score, player: newPlayerScore },
        isRunning: false,
        isGameOver: true,
        winner: 'player',
        activeCellId: null,
      })
      return
    }

    set({
      cells: cells.map((c) => (c.id === cellId ? { ...c, status: 'success' } : c)),
      score: { ...score, player: newPlayerScore },
      activeCellId: null,
    })

    setTimeout(() => get().nextRound(), 300)
  },

  endRoundFail: () => {
    const { activeCellId, cells, score, isRunning, isGameOver } = get()

    if (!isRunning || isGameOver || activeCellId === null) return

    const newComputerScore = score.computer + 1

    if (newComputerScore >= WIN_SCORE) {
      set({
        cells: cells.map((c) => (c.id === activeCellId ? { ...c, status: 'fail' } : c)),
        score: { ...score, computer: newComputerScore },
        isRunning: false,
        isGameOver: true,
        winner: 'computer',
        activeCellId: null,
      })
      return
    }

    set({
      cells: cells.map((c) => (c.id === activeCellId ? { ...c, status: 'fail' } : c)),
      score: { ...score, computer: newComputerScore },
      activeCellId: null,
    })

    setTimeout(() => get().nextRound(), 300)
  },

  resetGame: () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }

    set({
      cells: Array.from({ length: GRID_SIZE }, (_, i) => ({
        id: i,
        status: 'idle',
      })),
      score: { player: 0, computer: 0 },
      isRunning: false,
      isGameOver: false,
      winner: null,
      activeCellId: null,
    })
  },
}))
