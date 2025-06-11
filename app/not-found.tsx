import Link from 'next/link'
import { BackButton } from './components/not-found/BackButton'
import { useRoutes } from './hooks/shared/useRoutes'

const Custom404 = () => {
  const ALL_ROUTES = useRoutes('all')

  return (
    <>
      <h1 className="heading-one">Page Not Found</h1>
      <div className="max-w-screen-md pb-40 pt-8">
        <div className="pb-7 text-center">
          <div
            className="text-primary-600 dark:text-primary-400 text-6xl font-bold"
            aria-hidden={true}
          >
            404
          </div>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Oops! The page you are looking for doesn not exist or has been
            moved.
          </p>
        </div>
        <section className="mb-12 max-w-lg bg-gray-50 px-7 py-4 text-left dark:bg-gray-800 md:rounded-lg">
          <h2 className="mb-4 px-0 text-2xl font-semibold">What you can do:</h2>
          <ul
            className="list-disc space-y-4 pl-4"
            aria-label="What you can do when a page is not found"
          >
            <li>
              <span>Check if you typed the URL correctly</span>
            </li>
            <li>
              <span>Go back to the previous page</span>
            </li>
            <li>
              <span>Visit one of our main pages below</span>
            </li>
          </ul>
          <BackButton />
        </section>
        <section className="max-w-lg border border-gray-200 p-6 text-center dark:border-gray-700 md:rounded-lg">
          <h2 className="mb-4 text-2xl font-semibold">Available Pages:</h2>
          <nav>
            <ul className="space-y-4" aria-label="Available pages">
              {ALL_ROUTES.map(({ to, label }) => (
                <li key={to} className="flex flex-col items-center space-y-1">
                  <span className="font-poppins text-lg text-gray-600 dark:text-gray-300">
                    {label}:
                  </span>
                  <Link
                    href={to}
                    className="button w-fit px-4 py-2"
                    aria-label={`Go to ${label} page`}
                  >
                    {to}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>
              Need help?{' '}
              <Link
                href="/contact"
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                Contact us
              </Link>
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

export default Custom404
