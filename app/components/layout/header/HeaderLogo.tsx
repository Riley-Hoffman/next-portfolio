import { useRouter } from 'next/navigation'
import { EmptyObject } from '@/app/types/shared/EmptyObject.type'

export const HeaderLogo = ({ }: EmptyObject) => {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push('/')}
      aria-label="Riley Hoffman Back To Home Page"
      role="link"
    >
      Riley Hoffman
    </button>
  )
}
