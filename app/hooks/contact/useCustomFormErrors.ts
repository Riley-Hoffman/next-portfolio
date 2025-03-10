import { useState, useEffect, useCallback } from 'react'
import { FormValue } from '@/app/types/contact/FormValue.interface'
import isEmail from 'validator/lib/isEmail'

export const useCustomFormErrors = (
  initialState: FormValue,
  isSubmitting: boolean
) => {
  const [formState, setFormState] = useState(initialState)
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
    if (isSubmitting) assignFormErrors()
  }, [isSubmitting, assignFormErrors])

  const handleChange =
    (field: keyof FormValue) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target

      setFormState((prevState) => ({
        ...prevState,
        [field]: value,
      }))

      setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }))
    }

  const handleInvalid = () => {
    assignFormErrors()
  }

  return {
    formState,
    errors,
    handleChange,
    handleInvalid,
  }
}
