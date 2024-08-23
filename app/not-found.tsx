import Link from 'next/link';
import { RouteList } from '../components/RouteList';

export default function Custom404() {
  return (
      <>
          <h1 className="text-center text-3xl leading-normal bg-[#eee2f3] border-b-2 mb-7 mt-0 py-10 px-5 gradient-border inverted md:text-5xl md:leading-normal contrast-more:bg-white">Page Not Found</h1>
          <div className="max-w-screen-md p-[1.875rem_0_20vh]"> 
              <h2 className="text-4xl">404</h2>
              <p className="text-xl mb-0">Sorry, the document you requested is not available.</p>
              <p className="text-xl mt-0 pb-4">Please select one of the available pages below:</p>
              <ul className="max-w-screen-md px-5 text-lg text-left md:text-2xl" aria-label="Available pages">
                  {RouteList.map(route => (
                      <li className="py-1 md:py-2" key={route.path}>
                              <h3 className="my-1 px-1 text-lg">{route.name}:</h3>
                              <Link className="py-1 px-2 no-underline block w-fit button" href={route.path}>{`${route.path}`}</Link>
                      </li>
                  ))}
              </ul>

          </div>
      </>
  )
}