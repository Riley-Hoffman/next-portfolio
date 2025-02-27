import { useReducer } from 'react'

export interface GameData {
  time: number | null
  gameInProgress: boolean
  cursorMessage: string
  cursorMessageRead: boolean
}

type Action =
  | { type: 'START_GAME' }
  | { type: 'END_GAME'; time: number }
  | { type: 'RESET_GAME' }
  | { type: 'SET_CURSOR_MESSAGE'; message: string }
  | { type: 'MARK_MESSAGE_READ' }

const initialGameData: GameData = {
  time: null,
  gameInProgress: true,
  cursorMessage: '',
  cursorMessageRead: true,
}

function reducer(gameData: GameData, action: Action): GameData {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...gameData,
        gameInProgress: true,
        cursorMessage: '',
        cursorMessageRead: true,
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
        cursorMessageRead: false,
      }
    case 'MARK_MESSAGE_READ':
      return { ...gameData, cursorMessageRead: true }
    default:
      return gameData
  }
}

export function useGameData() {
  const [gameData, dispatch] = useReducer(reducer, initialGameData)
  return [gameData, dispatch] as const
}
