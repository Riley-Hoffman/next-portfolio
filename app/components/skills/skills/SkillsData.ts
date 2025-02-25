export interface Skill {
  skill: string
  icon: string
  classes?: string
}

const PADDING_ROUNDING = ' p-[0.313rem] rounded-2xl'

export const SKILLS_DATA: Skill[] = [
  { skill: 'HTML5', icon: 'skill-icons:html' },
  { skill: 'CSS3', icon: 'skill-icons:css' },
  { skill: 'Javascript + ES6', icon: 'skill-icons:javascript' },
  { skill: 'Typescript', icon: 'skill-icons:typescript' },
  { skill: 'React', icon: 'skill-icons:react-dark' },
  { skill: 'Next.js', icon: 'skill-icons:nextjs-dark' },
  { skill: 'Vue.js', icon: 'skill-icons:vuejs-dark' },
  { skill: 'jQuery', icon: 'skill-icons:jquery' },
  { skill: 'SASS', icon: 'skill-icons:sass' },
  { skill: 'Tailwind CSS', icon: 'skill-icons:tailwindcss-dark' },
  { skill: 'Wordpress', icon: 'skill-icons:wordpress' },
  { skill: 'PHP', icon: 'skill-icons:php-dark' },
  { skill: 'Python', icon: 'skill-icons:python-dark' },
  { skill: 'Node.js', icon: 'skill-icons:nodejs-dark' },
  { skill: 'Express', icon: 'skill-icons:expressjs-dark' },
  { skill: 'MongoDB', icon: 'skill-icons:mongodb' },
  {
    skill: 'Firebase',
    icon: 'devicon:firebase',
    classes: `${PADDING_ROUNDING} bg-white`,
  },
  { skill: 'Git', icon: 'skill-icons:git' },
  { skill: 'GitHub Actions', icon: 'skill-icons:githubactions-dark' },
  { skill: 'Netlify', icon: 'skill-icons:netlify-dark' },
  { skill: 'Jest', icon: 'skill-icons:jest' },
  {
    skill: 'WCAG',
    icon: 'file-icons:w3c',
    classes: `${PADDING_ROUNDING} bg-[#005a9c] text-white`,
  },
  {
    skill: 'SEO',
    icon: 'fluent:globe-search-20-filled',
    classes: `${PADDING_ROUNDING} bg-[#FBBC05] text-[#4285F4]`,
  },
  {
    skill: 'Rest API',
    icon: 'file-icons:api-blueprint',
    classes: `${PADDING_ROUNDING} bg-[#edff74] text-teal-800`,
  },
]
