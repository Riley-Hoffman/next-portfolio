import { useState, useCallback } from 'react'

export const useFormErrors = () => {
  const [formErrors, setFormErrors] = useState<string[]>([])

  const handleErrors = useCallback((errors: string[]) => {
    setFormErrors((prevErrors) =>
      prevErrors.length === errors.length &&
      prevErrors.every((e, i) => e === errors[i])
        ? prevErrors
        : errors
    )
  }, [])

  return { formErrors, handleErrors }
}
