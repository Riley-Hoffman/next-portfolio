import { Icon } from "@iconify/react"

interface NewTabContentProps {
  icon?: boolean
}

export const NewTabContent = ({ icon = true }: NewTabContentProps) => {
  return (
    <>
      <span className="sr-only"> (Opens in a new tab)</span>
      {icon && <Icon className="ml-0.5" icon="fluent:window-new-16-regular" />}
    </>
  )
}
