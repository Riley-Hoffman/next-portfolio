import {
  faArrowsAltH,
  faMagnifyingGlassChart,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons"

interface SkillBase {
  skill: string
}

export type Skill =
  | (SkillBase & { devicon: string; icon?: never; image?: never })
  | (SkillBase & { icon: IconDefinition; devicon?: never; image?: never })
  | (SkillBase & { image: string; devicon?: never; icon?: never })

export const skillsData: Skill[] = [
  { skill: "HTML5", devicon: "devicon-html5-plain" },
  { skill: "CSS3", devicon: "devicon-css3-plain" },
  { skill: "Javascript + ES6", devicon: "devicon-javascript-plain" },
  { skill: "Typescript", devicon: "devicon-typescript-plain" },
  { skill: "SASS", devicon: "devicon-sass-original" },
  { skill: "Tailwind CSS", devicon: "devicon-tailwindcss-original" },
  { skill: "React", devicon: "devicon-react-original" },
  { skill: "Next.js", devicon: "devicon-nextjs-plain" },
  { skill: "Vue.js", devicon: "devicon-vuejs-plain" },
  { skill: "Rest API", icon: faArrowsAltH },
  {
    skill: "WCAG",
    image:
      "https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/wcag.png",
  },
  { skill: "Git", devicon: "devicon-git-plain" },
  { skill: "jQuery", devicon: "devicon-jquery-plain" },
  { skill: "Wordpress", devicon: "devicon-wordpress-plain" },
  { skill: "PHP", devicon: "devicon-php-plain" },
  { skill: "Firebase", devicon: "devicon-firebase-plain" },
  { skill: "Netlify", devicon: "devicon-netlify-plain" },
  { skill: "Node.js", devicon: "devicon-nodejs-plain" },
  { skill: "SEO", icon: faMagnifyingGlassChart },
  { skill: "Express", devicon: "devicon-express-original" },
  { skill: "MongoDB", devicon: "devicon-mongodb-plain" },
  { skill: "GitHub Actions", devicon: "devicon-githubactions-plain" },
  { skill: "Elasticsearch", devicon: "devicon-elasticsearch-plain" },
  { skill: "Jest", devicon: "devicon-jest-plain" },
]
