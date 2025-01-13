import { renderHook } from '@testing-library/react'
import { useMedalDetails } from '../hooks/useMedalDetails'
import { useGameData } from '../hooks/useGameData'

jest.mock('../hooks/useGameData')

describe('useMedalDetails', () => {
  it('should return null if time is null', () => {
    ;(useGameData as jest.Mock).mockReturnValue([{}, jest.fn()])

    const { result } = renderHook(() => useMedalDetails(null))

    expect(result.current).toBeNull()
  })

  it('should return null if time is greater than 25', () => {
    ;(useGameData as jest.Mock).mockReturnValue([{}, jest.fn()])

    const { result } = renderHook(() => useMedalDetails(30))

    expect(result.current).toBeNull()
  })

  it('should return Gold Medal if time is less than 15', () => {
    ;(useGameData as jest.Mock).mockReturnValue([{}, jest.fn()])

    const { result } = renderHook(() => useMedalDetails(10))

    expect(result.current).toEqual({
      cutoff: 15,
      text: 'Gold Medal',
      color: '#8A7400',
    })
  })

  it('should return Silver Medal if time is between 15 and 21', () => {
    ;(useGameData as jest.Mock).mockReturnValue([{}, jest.fn()])

    const { result } = renderHook(() => useMedalDetails(18))

    expect(result.current).toEqual({
      cutoff: 21,
      text: 'Silver Medal',
      color: '#737373',
    })
  })

  it('should return Bronze Medal if time is between 21 and 25', () => {
    ;(useGameData as jest.Mock).mockReturnValue([{}, jest.fn()])

    const { result } = renderHook(() => useMedalDetails(23))

    expect(result.current).toEqual({
      cutoff: 26,
      text: 'Bronze Medal',
      color: '#A2652A',
    })
  })
})
