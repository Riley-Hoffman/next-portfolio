import type { FormValue } from '@/app/types/contact/FormValue.interface'

export interface NamedError {
  name: keyof FormValue | 'form'
  message: string
}
