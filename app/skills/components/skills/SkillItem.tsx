import Image from "next/image"
import { Skill } from "./SkillsData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const SkillItem = ({ skill, icon, devicon, image }: Skill) => (
  <li className="text-center">
    <div className="skill-icon-box flex min-h-[2.766rem] items-center justify-center">
      {devicon && <i className={`text-5xl ${devicon}`} aria-hidden={true} />}
      {icon && <FontAwesomeIcon className="text-5xl" icon={icon} />}
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
    <p className="mt-1" translate="no">
      {skill}
    </p>
  </li>
)
