import clsx from 'clsx'
interface BackgroundAccentProps {
  classes?: string
}

export const BackgroundAccent = ({ classes }: BackgroundAccentProps) => (
  <div
    className={clsx('absolute -z-10 bg-[#ececf2] dark:bg-[#0d1213]', classes)}
  ></div>
)
