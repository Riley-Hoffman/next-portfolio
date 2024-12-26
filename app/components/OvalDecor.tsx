import clsx from "clsx"

interface OvalDecorProps {
  classes?: string
}

export const OvalDecor = ({ classes }: OvalDecorProps) => {
  return <div className={clsx("oval-decor", classes)}></div>
}
