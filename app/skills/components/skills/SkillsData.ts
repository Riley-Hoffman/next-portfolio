interface SkillBase {
  skill: string
}

export type Skill =
  | (SkillBase & { icon: string; image?: never })
  | (SkillBase & { image: string; icon?: never })

export const skillsData: Skill[] = [
  { skill: "HTML5", icon: "devicon-plain:html5" },
  { skill: "CSS3", icon: "devicon-plain:css3" },
  { skill: "Javascript + ES6", icon: "devicon-plain:javascript" },
  { skill: "Typescript", icon: "cib:typescript" },
  { skill: "SASS", icon: "cib:sass-alt" },
  { skill: "Tailwind CSS", icon: "bxl:tailwind-css" },
  { skill: "React", icon: "cib:react" },
  { skill: "Next.js", icon: "devicon-plain:nextjs" },
  { skill: "Vue.js", icon: "devicon-plain:vuejs" },
  { skill: "Rest API", icon: "fa6-solid:arrows-left-right" },
  {
    skill: "WCAG",
    image:
      "https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/wcag.png",
  },
  { skill: "Git", icon: "devicon-plain:git" },
  { skill: "jQuery", icon: "devicon-plain:jquery" },
  { skill: "Wordpress", icon: "devicon-plain:wordpress" },
  { skill: "PHP", icon: "devicon-plain:php" },
  { skill: "Firebase", icon: "bxl:firebase" },
  { skill: "Netlify", icon: "devicon-plain:netlify" },
  { skill: "Node.js", icon: "devicon-plain:nodejs" },
  { skill: "SEO", icon: "fa6-solid:magnifying-glass-chart" },
  { skill: "Express", icon: "devicon:express" },
  { skill: "MongoDB", icon: "devicon-plain:mongodb" },
  { skill: "GitHub Actions", icon: "devicon-plain:githubactions" },
  { skill: "Elasticsearch", icon: "devicon-plain:elasticsearch" },
  { skill: "Jest", icon: "devicon-plain:jest" },
]
