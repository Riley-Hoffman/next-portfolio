import type { Metadata } from 'next';
import './styles/deviconcdn.css'
import { WebPage, WithContext } from 'schema-dts';
import { faArrowsAltH } from '@fortawesome/free-solid-svg-icons';
import SchemaOrg from '../../components/SchemaOrg';
import { SkillItem } from './components/SkillItem';

export const metadata: Metadata = {
    title: 'Skills',
    description: 'My skills. Riley Hoffman - Web Developer.',
    metadataBase: new URL('https://rileyhoffman.com/skills'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
      images: '/thumbnail.jpg',
        title: 'Skills',
        url: 'https://rileyhoffman.com/skills'
      },
};

const structuredData: WithContext<WebPage> = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  headline: 'Skills - Riley Hoffman - Web Developer',
  description:
    "My skills. Riley Hoffman - Web Developer.",
  image: '/static/media/riley.d8092b303038937a099e.jpg',
  datePublished: '2024-07-04T09:25:01.340Z',
  author: {
    '@type': 'Person',
    name: 'Riley Hoffman',
    url: 'https://rileyhoffman.com',
  },
};

export default function Skills()  {
  const skills = [
    { skill: 'HTML5', devicon: 'devicon-html5-plain' },
    { skill: 'CSS3', devicon: 'devicon-css3-plain' },
    { skill: 'Javascript + ES6', devicon: 'devicon-javascript-plain' },
    { skill: 'Typescript', devicon: 'devicon-typescript-plain' },
    { skill: 'SASS', devicon: 'devicon-sass-original' },
    { skill: 'Tailwind CSS', devicon: 'devicon-tailwindcss-original' },
    { skill: 'React', devicon: 'devicon-react-original' },
    { skill: 'Next.js', devicon: 'devicon-nextjs-original-wordmark' },
    { skill: 'Vue.js', devicon: 'devicon-vuejs-plain' },
    { skill: 'Rest API', icon: faArrowsAltH },
    { skill: 'WCAG', image: true },
    { skill: 'Git', devicon: 'devicon-git-plain' },
    { skill: 'jQuery', devicon: 'devicon-jquery-plain-wordmark' },
    { skill: 'Wordpress', devicon: 'devicon-wordpress-plain' },
    { skill: 'PHP', devicon: 'devicon-php-plain' },
    { skill: 'Firebase', devicon: 'devicon-firebase-plain' },
    { skill: 'JSON', devicon: 'devicon-json-plain' },
    { skill: 'Netlify', devicon: 'devicon-netlify-plain' },
  ];

  return (
    <>
      <SchemaOrg structuredData={structuredData} />
      <section className="pb-16">
        <h1 className="text-center text-3xl leading-normal bg-[#eee2f3] border-b-2 mb-7 mt-0 py-10 px-5 gradient-border inverted md:text-5xl md:leading-normal contrast-more:bg-white" aria-live="polite">Skills</h1>
        <div className="max-w-screen-xl relative">
            <ul className="max-w-5xl pt-5 pb-12 mt-16 grid grid-cols-2 justify-items-center skills-list sm:grid-cols-3 md:grid-cols-4" aria-label="Skills">
              {skills.map((skill, index) => (
                <SkillItem key={index} skill={skill.skill} devicon={skill.devicon} icon={skill.icon} image={skill.image} />
              ))}
            </ul>
            <div className="bg-purple-100 rounded-[50%] z-[-1] opacity-10 absolute top-[3%] right-[5%] bottom-[3%] left-[5%] oval"></div>
        </div>
      </section>
    </>
  );
};