import { Icon } from './constants/IconLinksData'

export const IconLinks = ({ rel, type, sizes, href }: Icon) => (
  <link key={href} rel={rel} type={type} sizes={sizes} href={href} />
)
