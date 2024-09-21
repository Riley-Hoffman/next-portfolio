import type { Metadata } from 'next';
import SchemaOrg from '../../components/SchemaOrg';
import { projects } from './components/ProjectData';
import { ProjectBox } from './components/ProjectBox';
import { ProjectContent } from './components/ProjectContent';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'View past projects by Riley Hoffman - Web Developer.',
  metadataBase: new URL('https://rileyhoffman.com/projects'),
  alternates: { canonical: '/' },
  openGraph: {
    images: '/thumbnail.jpg',
    title: 'Projects',
    url: 'https://rileyhoffman.com/projects',
  },
};

export default function Projects() {
  const categories = Array.from(new Set(projects.map(p => p.category)));
  return (
    <> 
      <SchemaOrg 
        headline="Projects - Riley Hoffman - Web Developer" 
        description="View past projects by Riley Hoffman - Web Developer." 
        image="/static/media/riley.d8092b303038937a099e.jpg" 
        datePublished="2024-07-04T09:25:01.340Z" 
      />
      <h1 className="text-center text-3xl leading-normal bg-[#eee2f3] border-b-2 mb-7 mt-0 py-10 px-5 gradient-border inverted md:text-5xl md:leading-normal contrast-more:bg-white" aria-live="polite">Projects</h1>
      <div className="pt-5 pb-20 overflow-hidden">
        {categories.map((category, idx) => (
          <ProjectCategory key={category} category={category} index={idx} />
        ))}
      </div>
    </>
  );
}

function ProjectCategory({ category, index }: { category: string; index: number }) {
  const filteredProjects = projects.filter(p => p.category === category);
  return (
    <>
      <h2 className="max-w-screen-xl text-2xl pb-5 leading-normal md:text-3xl">{category} Projects</h2>
      <ul className="max-w-screen-xl pb-5 text-base" aria-label={`${category} Projects`}>
        {filteredProjects.map((project, idx) => (
          <ProjectBox key={project.title} inverted={idx % 2 !== 0 ? 'inverted' : ''} animation={project.animation} isFirst={index === 0 && idx === 0}>
            <ProjectContent {...project} isFirst={index === 0 && idx === 0} />
          </ProjectBox>
        ))}
      </ul>
    </>
  );
}
