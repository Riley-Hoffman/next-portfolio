import { IconLink } from './constants/IconLinksData'

export const IconLinks = ({ rel, type, sizes, href }: IconLink) => (
  <link key={href} rel={rel} type={type} sizes={sizes} href={href} />
)
