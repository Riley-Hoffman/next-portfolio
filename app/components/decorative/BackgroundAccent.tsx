import clsx from "clsx"

interface BackgroundAccentProps {
  classes?: string
}

export const BackgroundAccent = ({ classes }: BackgroundAccentProps) => {
  return <div className={clsx("absolute -z-10 bg-[#ececf2] dark:bg-sitebackground", classes)}></div>
}
