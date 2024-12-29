import clsx from "clsx"

interface NewTabSrTextProps {
  text?: boolean
  icon?: boolean
}

export const NewTabSrText = ({
  text = true,
  icon = true,
}: NewTabSrTextProps) => {
  return (
    <span className={clsx({ "new-tab-sr-text": icon })}>
      {text && <span className="sr-only"> (Opens in a new tab)</span>}
    </span>
  )
}
