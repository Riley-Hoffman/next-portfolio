import Link from 'next/link'
import { useRoutes } from './hooks/shared/useRoutes'

const Custom404 = () => {
  const ALL_ROUTES = useRoutes('all')
  return (
    <>
      <h1 className="heading-one">Page Not Found</h1>
      <div className="max-w-screen-md pb-[20vh] pt-8">
        <h2 className="text-4xl">404</h2>
        <p className="mb-0 text-xl">
          Sorry, the document you requested is not available.
        </p>
        <p className="mt-0 pb-4 text-xl">
          Please select one of the available pages below:
        </p>
        <ul className="px-5 md:text-2xl" aria-label="Available pages">
          {ALL_ROUTES.map(({ to, label }) => (
            <li className="py-1 md:py-2" key={to}>
              <span className="my-1 px-1 text-lg font-poppins block">{label}:</span>
              <Link
                className="button block w-fit px-2 py-1"
                href={to}
              >{`${to}`}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Custom404
