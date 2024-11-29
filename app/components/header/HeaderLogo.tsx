export const HeaderLogo = () => {
  const handleClickHome = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/"
    }
  }
  return (
    <div className="logo">
      <button
        className="order-1 m-0 pl-4 pr-0 text-center font-urbanist text-lg font-medium uppercase tracking-wider md:font-normal lg:text-2xl"
        onClick={handleClickHome}
      >
        <span aria-hidden={true}>Riley Hoffman</span>
        <span className="sr-only">Back To Home Page</span>
      </button>
    </div>
  )
}
