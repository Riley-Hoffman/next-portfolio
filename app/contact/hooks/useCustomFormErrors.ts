import { useState, useEffect, useCallback } from 'react'
import { FormValue } from '../types/FormValue.interface'
import isEmail from 'validator/lib/isEmail'

export const useCustomFormErrors = (initialState: FormValue) => {
  const [formState, setFormState] = useState(initialState)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<keyof FormValue, string>>({
    name: '',
    email: '',
    message: '',
  })

  const assignFormErrors = useCallback(() => {
    const { name, email, message } = formState
    const newErrors = {
      name: name.trim() === '' ? 'Please enter your name.' : '',
      email: !isEmail(email) ? 'Please enter a valid email address.' : '',
      message: message.trim() === '' ? 'Please enter a message.' : '',
    }
    setErrors(newErrors)
  }, [formState])

  useEffect(() => {
    if (submitted) {
      assignFormErrors()
    }
  }, [submitted, assignFormErrors])

  const handleChange =
    (field: keyof FormValue) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target

      setFormState((prevState) => ({
        ...prevState,
        [field]: value,
      }))

      setSubmitted(false)
      setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }))
    }

  const handleInvalidSubmission = () => {
    setSubmitted(true)
    assignFormErrors()
  }

  return {
    formState,
    errors,
    handleChange,
    handleInvalidSubmission,
  }
}
