import clsx from "clsx"

interface NewTabContentProps {
  text?: boolean
  icon?: boolean
}

export const NewTabContent = ({
  text = true,
  icon = true,
}: NewTabContentProps) => {
  return (
    <span className={clsx({ "new-tab-content": icon })}>
      {text && <span className="sr-only"> (Opens in a new tab)</span>}
    </span>
  )
}
