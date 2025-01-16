import { useRouter } from 'next/navigation'

export const HeaderLogo = () => {
  const router = useRouter()

  return (
    <button
      className="m-0 pl-4 pr-0 text-center font-urbanist font-medium uppercase tracking-wider text-heading md:font-normal lg:text-2xl"
      onClick={() => router.push('/')}
      aria-label="Riley Hoffman Back To Home Page"
      role="link"
    >
      Riley Hoffman
    </button>
  )
}
