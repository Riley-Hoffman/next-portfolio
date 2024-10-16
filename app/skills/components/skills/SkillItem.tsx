import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import wcag from './images/wcag.png';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface SkillItemProps {
  skill: string;
  icon?: IconProp; 
  devicon?: string;
  image?: boolean;
}

export const SkillItem = ({ skill, icon, devicon, image }: SkillItemProps) =>  ( 
  <li className="text-center">
    <div className="flex justify-center items-center min-h-[2.766rem] skill-icon-box">
      {devicon ? (
        <i className={`text-5xl ${devicon}`} aria-hidden="true"></i>
      ) : image ? (
        <Image src={wcag} className="w-20" alt="" />
      ) : icon ? (
        <FontAwesomeIcon className="text-5xl" icon={icon} />
      ) : null} 
    </div>
    <p className="mt-1" translate="no">{skill}</p>
  </li>
);