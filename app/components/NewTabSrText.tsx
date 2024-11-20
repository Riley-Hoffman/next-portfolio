interface NewTabSrTextProps {
  icon?: boolean
}

export const NewTabSrText = ({ icon = false }: NewTabSrTextProps) => (
  <>
    <span className="sr-only"> (opens in a new tab)</span>
    {icon && (
      <span
        className="after:inline-block after:h-0 after:pl-[0.313rem] after:font-fontawesomesolid after:text-[63%] after:font-normal after:content-['\f08e']"
        aria-hidden={true}
      ></span>
    )}
  </>
)
