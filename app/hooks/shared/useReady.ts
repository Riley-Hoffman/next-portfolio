import { useState, useCallback } from 'react'

export function useReady(): [boolean, () => void] {
  const [isReady, setIsReady] = useState(false)
  const onReady = useCallback(() => setIsReady(true), [])
  return [isReady, onReady]
}
