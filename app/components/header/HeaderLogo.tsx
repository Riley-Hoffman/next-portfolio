export const HeaderLogo = () => {
  const handleClickHome = () => {
    window.location.href = "/"
  }
  return (
    <div className="logo">
      <button
        className="m-0 pl-4 pr-0 text-center font-urbanist text-lg font-medium uppercase tracking-wider md:text-2xl md:font-normal"
        onClick={handleClickHome}
      >
        <span aria-hidden={true}>Riley Hoffman</span>
        <span className="sr-only">Back To Home Page</span>
      </button>
    </div>
  )
}
