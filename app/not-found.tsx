import Link from "next/link"
import { RouteList } from "./components/RouteList"

export default function Custom404() {
  return (
    <>
      <h1 className="heading-one">Page Not Found</h1>
      <div className="max-w-screen-md p-[1.875rem_0_20vh]">
        <h2 className="text-4xl">404</h2>
        <p className="mb-0 text-xl">
          Sorry, the document you requested is not available.
        </p>
        <p className="mt-0 pb-4 text-xl">
          Please select one of the available pages below:
        </p>
        <ul
          className="max-w-screen-md px-5 text-left text-lg md:text-2xl"
          aria-label="Available pages"
        >
          {RouteList.map((route) => (
            <li className="py-1 md:py-2" key={route.path}>
              <h3 className="my-1 px-1 text-lg">{route.name}:</h3>
              <Link
                className="button block w-fit px-2 py-1 no-underline"
                href={route.path}
              >{`${route.path}`}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
