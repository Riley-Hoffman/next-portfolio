import clsx from "clsx"

interface BackgroundAccentProps {
  classes?: string
}

export const BackgroundAccent = ({ classes }: BackgroundAccentProps) => {
  return <div className={clsx("background-accent", classes)}></div>
}
