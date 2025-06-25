import { useReducer } from 'react'

export interface GameData {
  time: number | null
  gameInProgress: boolean
  cursorMessage: string
}

type Action =
  | { type: 'START_GAME' }
  | { type: 'END_GAME'; time: number }
  | { type: 'RESET_GAME' }
  | { type: 'SET_CURSOR_MESSAGE'; message: string }

const initialGameData: GameData = {
  time: null,
  gameInProgress: true,
  cursorMessage: '',
}

const reducer = (gameData: GameData, action: Action): GameData => {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...gameData,
        gameInProgress: true,
        cursorMessage: '',
      }
    case 'END_GAME':
      return { ...gameData, time: action.time, gameInProgress: false }
    case 'RESET_GAME':
      return {
        ...initialGameData,
      }
    case 'SET_CURSOR_MESSAGE':
      return {
        ...gameData,
        cursorMessage: action.message,
      }
    default:
      return gameData
  }
}

export const useGameData = () => {
  const [gameData, dispatch] = useReducer(reducer, initialGameData)
  return [gameData, dispatch]
}
