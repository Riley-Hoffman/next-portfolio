import { act, renderHook } from '@testing-library/react'
import { useCustomFormErrors } from '../useCustomFormErrors'
import { FormValue } from '@/app/types/contact/FormValue.interface'

describe('useCustomFormErrors', () => {
  let initialState: FormValue
  let isSubmitting: boolean

  beforeEach(() => {
    initialState = { name: '', email: '', message: '' }
    isSubmitting = false
  })

  it('should initialize form state correctly', () => {
    const { result } = renderHook(() =>
      useCustomFormErrors(initialState, isSubmitting)
    )
    expect(result.current.formState.name).toBe('')
    expect(result.current.formState.email).toBe('')
    expect(result.current.formState.message).toBe('')
  })

  it('should show validation errors when the form is submitted with empty fields', async () => {
    const { result } = renderHook(() =>
      useCustomFormErrors(initialState, isSubmitting)
    )

    act(() => {
      result.current.handleInvalid()
    })

    expect(result.current.errors.name).toBe('Please enter your name.')
    expect(result.current.errors.email).toBe(
      'Please enter a valid email address.'
    )
    expect(result.current.errors.message).toBe('Please enter a message.')
  })

  it('should clear errors and update form state when the user changes input fields', async () => {
    const { result } = renderHook(() =>
      useCustomFormErrors(initialState, isSubmitting)
    )

    act(() => {
      result.current.handleChange('name')({
        target: { value: 'John Doe' },
      } as React.ChangeEvent<HTMLInputElement>)
      result.current.handleChange('email')({
        target: { value: 'john@example.com' },
      } as React.ChangeEvent<HTMLInputElement>)
      result.current.handleChange('message')({
        target: { value: 'Hello, this is a message.' },
      } as React.ChangeEvent<HTMLTextAreaElement>)
    })

    expect(result.current.formState.name).toBe('John Doe')
    expect(result.current.formState.email).toBe('john@example.com')
    expect(result.current.formState.message).toBe('Hello, this is a message.')

    expect(result.current.errors.name).toBe('')
    expect(result.current.errors.email).toBe('')
    expect(result.current.errors.message).toBe('')
  })

  it('should validate email format', async () => {
    const { result } = renderHook(() =>
      useCustomFormErrors(initialState, isSubmitting)
    )

    act(() => {
      result.current.handleChange('name')({
        target: { value: 'John Doe' },
      } as React.ChangeEvent<HTMLInputElement>)
      result.current.handleChange('email')({
        target: { value: 'invalid-email' },
      } as React.ChangeEvent<HTMLInputElement>)
      result.current.handleChange('message')({
        target: { value: 'Message content' },
      } as React.ChangeEvent<HTMLTextAreaElement>)
    })

    act(() => {
      result.current.handleInvalid()
    })

    expect(result.current.errors.email).toBe(
      'Please enter a valid email address.'
    )
  })

  it('should not show email error if a valid email is entered', async () => {
    const { result } = renderHook(() =>
      useCustomFormErrors(initialState, isSubmitting)
    )

    act(() => {
      result.current.handleChange('name')({
        target: { value: 'John Doe' },
      } as React.ChangeEvent<HTMLInputElement>)
      result.current.handleChange('email')({
        target: { value: 'john.doe@example.com' },
      } as React.ChangeEvent<HTMLInputElement>)
      result.current.handleChange('message')({
        target: { value: 'Message content' },
      } as React.ChangeEvent<HTMLTextAreaElement>)
    })

    act(() => {
      result.current.handleInvalid()
    })

    expect(result.current.errors.email).toBe('')
  })
})
