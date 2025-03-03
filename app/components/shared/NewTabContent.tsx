import { Icon } from '@iconify/react'

export const NewTabContent = ({ icon = true }: { icon?: boolean }) => (
  <>
    <span className="sr-only"> (Opens in a new tab)</span>
    {icon && <Icon className="ml-0.5" icon="fluent:window-new-16-regular" />}
  </>
)
