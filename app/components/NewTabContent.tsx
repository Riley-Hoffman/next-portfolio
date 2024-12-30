import { Icon } from "@iconify/react"

interface NewTabContentProps {
  text?: boolean
  icon?: boolean
}

export const NewTabContent = ({
  text = true,
  icon = true,
}: NewTabContentProps) => {
  return (
    <>
      {text && <span className="sr-only"> (Opens in a new tab)</span>}
      {icon && (
        <Icon className="ml-[0.12rem]" icon="fluent:window-new-16-regular" />
      )}
    </>
  )
}
