import { useRouter } from "next/navigation"

export const HeaderLogo = () => {
  const router = useRouter()

  return (
    <div className="logo">
      <button
        className="order-1 m-0 pl-4 pr-0 text-center font-urbanist font-medium uppercase tracking-wider text-heading md:font-normal lg:text-2xl"
        onClick={() => router.push("/")}
      >
        <span aria-hidden={true}>Riley Hoffman</span>
        <span className="sr-only">Back To Home Page</span>
      </button>
    </div>
  )
}
