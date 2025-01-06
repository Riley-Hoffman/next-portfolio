import { act, renderHook } from "@testing-library/react"
import { useFormValidation } from "../hooks/useFormValidation"
import { FormData } from "../components/form/Form"

describe("useFormValidation", () => {
  let initialState: FormData

  beforeEach(() => {
    initialState = { name: "", email: "", message: "" }
  })

  it("should initialize form state correctly", () => {
    const { result } = renderHook(() => useFormValidation(initialState))
    expect(result.current.formState.name).toBe("")
    expect(result.current.formState.email).toBe("")
    expect(result.current.formState.message).toBe("")
  })

  it("should show validation errors when the form is submitted with empty fields", async () => {
    const { result } = renderHook(() => useFormValidation(initialState))

    act(() => {
      result.current.handleSubmission()
    })

    expect(result.current.errors.name).toBe("Please enter your name.")
    expect(result.current.errors.email).toBe(
      "Please enter a valid email address."
    )
    expect(result.current.errors.message).toBe("Please enter a message.")
  })

  it("should clear errors and update form state when the user changes input fields", async () => {
    const { result } = renderHook(() => useFormValidation(initialState))

    act(() => {
      result.current.handleChange("name")({
        target: { value: "John Doe" },
      } as any)
      result.current.handleChange("email")({
        target: { value: "john@example.com" },
      } as any)
      result.current.handleChange("message")({
        target: { value: "Hello, this is a message." },
      } as any)
    })

    expect(result.current.formState.name).toBe("John Doe")
    expect(result.current.formState.email).toBe("john@example.com")
    expect(result.current.formState.message).toBe("Hello, this is a message.")

    expect(result.current.errors.name).toBe("")
    expect(result.current.errors.email).toBe("")
    expect(result.current.errors.message).toBe("")
  })

  it("should validate email format", async () => {
    const { result } = renderHook(() => useFormValidation(initialState))

    act(() => {
      result.current.handleChange("name")({
        target: { value: "John Doe" },
      } as any)
      result.current.handleChange("email")({
        target: { value: "invalid-email" },
      } as any)
      result.current.handleChange("message")({
        target: { value: "Message content" },
      } as any)
    })

    act(() => {
      result.current.handleSubmission()
    })

    expect(result.current.errors.email).toBe(
      "Please enter a valid email address."
    )
  })

  it("should not show email error if a valid email is entered", async () => {
    const { result } = renderHook(() => useFormValidation(initialState))

    act(() => {
      result.current.handleChange("name")({
        target: { value: "John Doe" },
      } as any)
      result.current.handleChange("email")({
        target: { value: "john.doe@example.com" },
      } as any)
      result.current.handleChange("message")({
        target: { value: "Message content" },
      } as any)
    })

    act(() => {
      result.current.handleSubmission()
    })

    expect(result.current.errors.email).toBe("")
  })
})
