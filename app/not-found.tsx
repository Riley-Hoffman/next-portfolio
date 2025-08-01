import Link from 'next/link'
import { BackButton } from './components/not-found/BackButton'
import { PathnameDisplay } from './components/shared/PathnameDisplay'
import { useRoutes } from './hooks/shared/useRoutes'

const Custom404 = () => {
  const ALL_ROUTES = useRoutes('all')

  return (
    <>
      <h1 className="heading-one">Page Not Found</h1>
      <div className="py-7 text-center">
        <div className="text-6xl text-heading" aria-hidden={true}>
          404
        </div>
        <p className="mt-4 text-xl">
          Oops! The page <PathnameDisplay /> does not exist or has been moved.
        </p>
      </div>
      <section className="mb-12 max-w-lg bg-accentone-100 px-7 py-4 text-left md:rounded-lg">
        <h2 className="mb-4 px-0">What you can do:</h2>
        <ul
          className="list-disc space-y-4 pl-4"
          aria-label="What you can do when a page is not found"
        >
          <li>Check if you typed the URL correctly</li>
          <li>Go back to the previous page</li>
          <li>Visit one of our main pages below</li>
        </ul>
        <BackButton />
      </section>
      <section className="mb-36 max-w-lg border border-bordercolor p-6 text-center md:rounded-lg">
        <h2 className="mb-4">Available Pages:</h2>
        <nav>
          <ul className="space-y-5" aria-label="Available pages">
            {ALL_ROUTES.map(({ to, label }) => (
              <li key={to}>
                <span className="mb-2 block font-poppins text-lg text-heading">
                  {label}:
                </span>
                <Link
                  href={to}
                  className="button px-4 py-2"
                  aria-label={`Go to ${label} page`}
                >
                  {to}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mt-10">
          Need help? <Link href="/contact">Contact us</Link>
        </p>
      </section>
    </>
  )
}

export default Custom404
