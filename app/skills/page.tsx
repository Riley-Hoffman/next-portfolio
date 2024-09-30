import type { Metadata } from 'next';
import '../../public/devicon.css';
import SchemaOrg from '../components/SchemaOrg';
import { SkillsData } from './components/SkillsData';
import { SkillItem } from './components/SkillItem';
import { Carousel } from './components/Carousel';
import { CarouselData } from './components/CarouselData';

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

export default function Skills()  {
  return (
    <>
      <SchemaOrg headline="Skills - Riley Hoffman - Web Developer" description="My skills. Riley Hoffman - Web Developer." image="/static/media/riley.d8092b303038937a099e.jpg" datePublished="2024-07-04T09:25:01.340Z" />
      <section className="pb-16">
        <h1 className="text-center text-3xl leading-normal bg-[#eee2f3] border-b-2 mb-7 mt-0 py-10 px-5 gradient-border inverted md:text-5xl md:leading-normal contrast-more:bg-white">Skills</h1>
        <div className="max-w-screen-xl relative">
            <ul className="max-w-5xl pt-9 pb-12 mt-16 grid grid-cols-2 gap-y-16 gap-x-6 justify-items-center skills-list sm:grid-cols-3 md:grid-cols-4" aria-label="Skills">
              {SkillsData.map((skill, index) => (
                <SkillItem key={index} {...skill} />
              ))}
            </ul>
            <div className="bg-purple-100 rounded-[50%] z-[-1] opacity-10 absolute top-[3%] right-[5%] bottom-[3%] left-[5%] oval"></div>
        </div>
      </section>
      <section className="pt-7 pb-16">
        <h2 className="max-w-fit pb-5" id="trainingsLabel">Trainings & Certifications</h2>
        <Carousel slides={CarouselData} />
      </section>
    </>
  );
};