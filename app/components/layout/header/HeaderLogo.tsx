import { useRouter } from 'next/navigation'

export const HeaderLogo = () => {
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
