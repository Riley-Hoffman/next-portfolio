export interface Skill {
  skill: string
  icon: string
  classes?: string
}

const sharedSkillClasses = " p-[0.313rem] rounded-2xl"

export const skillsData: Skill[] = [
  { skill: "HTML5", icon: "skill-icons:html" },
  { skill: "CSS3", icon: "skill-icons:css" },
  { skill: "Javascript + ES6", icon: "skill-icons:javascript" },
  { skill: "Typescript", icon: "skill-icons:typescript" },
  { skill: "SASS", icon: "skill-icons:sass" },
  { skill: "Tailwind CSS", icon: "skill-icons:tailwindcss-dark" },
  { skill: "React", icon: "skill-icons:react-dark" },
  { skill: "Next.js", icon: "skill-icons:nextjs-dark" },
  { skill: "Vue.js", icon: "skill-icons:vuejs-dark" },
  {
    skill: "Rest API",
    icon: "catppuccin:api-blueprint",
    classes: `${sharedSkillClasses} bg-[#edff74]`,
  },
  {
    skill: "WCAG",
    icon: "file-icons:w3c",
    classes: `${sharedSkillClasses} bg-[#005a9c] text-white`,
  },
  { skill: "Git", icon: "skill-icons:git" },
  { skill: "jQuery", icon: "skill-icons:jquery" },
  { skill: "Wordpress", icon: "skill-icons:wordpress" },
  { skill: "PHP", icon: "skill-icons:php-dark" },
  {
    skill: "Firebase",
    icon: "devicon:firebase",
    classes: `${sharedSkillClasses} bg-white`,
  },
  { skill: "Netlify", icon: "skill-icons:netlify-dark" },
  { skill: "Node.js", icon: "skill-icons:nodejs-dark" },
  {
    skill: "SEO",
    icon: "fa6-solid:magnifying-glass-chart",
    classes: `${sharedSkillClasses} bg-[#FBBC05] text-[#4285F4]`,
  },
  { skill: "Express", icon: "skill-icons:expressjs-dark" },
  { skill: "MongoDB", icon: "skill-icons:mongodb" },
  { skill: "GitHub Actions", icon: "skill-icons:githubactions-dark" },
  { skill: "Elasticsearch", icon: "skill-icons:elasticsearch-dark" },
  { skill: "Jest", icon: "skill-icons:jest" },
]
