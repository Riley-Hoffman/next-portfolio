import { IconLink } from './constants/iconLinkAttributes'

export const IconLinks = ({ rel, type, sizes, href }: IconLink) => (
  <link key={href} rel={rel} type={type} sizes={sizes} href={href} />
)
