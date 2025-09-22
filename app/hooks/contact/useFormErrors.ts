import { useState, useCallback } from 'react'
import type { NamedError } from '@/app/types/contact/NamedError.interface'

export const useFormErrors = () => {
  const [formErrors, setFormErrors] = useState<NamedError[]>([])

  const handleErrors = useCallback((errors: NamedError[]) => {
    setFormErrors((prevErrors) =>
      prevErrors.length === errors.length &&
      prevErrors.every(
        (e, i) => e.name === errors[i].name && e.message === errors[i].message
      )
        ? prevErrors
        : errors
    )
  }, [])

  return { formErrors, handleErrors }
}
