interface BackgroundAccentProps {
  classes?: string
}

export const BackgroundAccent = ({ classes }: BackgroundAccentProps) => (
  <div
    className={`absolute -z-10 bg-[#ececf2] dark:bg-[#0d1213] ${classes}`}
  ></div>
)
