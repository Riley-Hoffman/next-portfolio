interface IconLink {
  rel: string
  type?: string
  sizes?: string
  href: string
}

export const IconLinks = ({ rel, type, sizes, href }: IconLink) => (
  <link key={href} rel={rel} type={type} sizes={sizes} href={href} />
)
