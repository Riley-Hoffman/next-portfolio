import type { Metadata } from 'next';
import SchemaOrg from '../components/SchemaOrg';
import ProjectsList from './components/ProjectsList';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'View past projects by Riley Hoffman - Web Developer.',
  metadataBase: new URL('https://rileyhoffman.com/projects'),
  alternates: { canonical: '/' },
  openGraph: {
    images: '/thumbnail.jpg',
    title: 'Projects',
    url: 'https://rileyhoffman.com/projects/',
  },
};

export default function Projects() {
  return (
    <>
      <SchemaOrg headline="Projects - Riley Hoffman - Web Developer" description="View past projects by Riley Hoffman - Web Developer." image="/static/media/riley.d8092b303038937a099e.jpg" datePublished="2024-07-04T09:25:01.340Z" />
      <h1 className="text-center text-3xl leading-normal bg-[#eee2f3] border-b-2 mb-7 mt-0 py-10 px-5 gradient-border inverted md:text-5xl md:leading-normal contrast-more:bg-white">Projects</h1>
      <ProjectsList />
    </>
  );
}
