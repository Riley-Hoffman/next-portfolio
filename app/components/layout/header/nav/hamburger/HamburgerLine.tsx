interface HamburgerLineProps {
  classes: string
}

export const HamburgerLine = ({ classes }: HamburgerLineProps) => (
  <span className={`hamburger-line ${classes}`}></span>
)
