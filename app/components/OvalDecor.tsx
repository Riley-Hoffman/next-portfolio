interface OvalDecorProps {
  classes?: string
}

export const OvalDecor = ({ classes }: OvalDecorProps) => {
  const propClasses = classes ? " " + classes : ""
  return <div className={`oval-decor${propClasses}`}></div>
}
