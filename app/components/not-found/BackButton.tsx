'use client'
import { EmptyObject } from '@/app/types/shared/EmptyObject.type'
import { useRouter } from 'next/navigation'

export const BackButton = ({}: EmptyObject) => {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="button my-6 w-full p-3 md:w-auto"
      aria-label="Go back to previous page"
    >
      ← Go Back
    </button>
  )
}
