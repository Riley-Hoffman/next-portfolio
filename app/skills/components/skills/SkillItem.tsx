import Image from "next/image"
import { Icon } from "@iconify/react"
import { Skill } from "./SkillsData"

export const SkillItem = ({ skill, icon, image }: Skill) => (
  <li className="text-center">
    <div className="skill-icon-box flex min-h-[2.766rem] items-center justify-center">
      {icon && <Icon className="text-5xl" icon={icon} />}
      {image && (
        <Image
          src={image}
          className="w-20 selection:bg-transparent dark:invert"
          width={300}
          height={71}
          alt=""
        />
      )}
    </div>
    <p className="mt-1 text-xl" translate="no">
      {skill}
    </p>
  </li>
)
