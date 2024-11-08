import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface SkillItemProps {
  skill: string;
  icon?: IconProp;
  devicon?: string;
  image?: boolean;
}

export const SkillItem = ({ skill, icon, devicon, image }: SkillItemProps) => (
  <li className="text-center">
    <div className="skill-icon-box flex min-h-[2.766rem] items-center justify-center">
      {devicon ? (
        <i className={`text-5xl ${devicon}`} aria-hidden={true}></i>
      ) : image ? (
        <Image
          src="https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/wcag.png"
          className="w-20"
          width="300"
          height="71"
          alt=""
        />
      ) : icon ? (
        <FontAwesomeIcon className="text-5xl" icon={icon} />
      ) : null}
    </div>
    <p className="mt-1" translate="no">
      {skill}
    </p>
  </li>
);
