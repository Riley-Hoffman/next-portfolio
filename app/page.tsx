'use client';
import { useRef } from 'react';
import SchemaOrg from '../components/SchemaOrg';
import { LazyLoadLink } from './components/LazyLoadLink';
import { CoverImage } from './components/home/CoverImage';
import { FirstFoldContent } from './components/home/FirstFoldContent';
import { MyJourneyWrapper } from './components/home/MyJourneyWrapper';
import { MyJourneyContent } from './components/home/MyJourneyContent';
import { SiteTechStack } from './components/home/SiteTechStack/SiteTechStack';

interface Tech {
  name: string;
  logo: string;
  url: string;
}

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);

  const technologies: Tech[] = [
    { name: 'React', logo: 'devicon-react-original', url: 'https://react.dev' },
    { name: 'Next.js', logo: 'devicon-nextjs-plain', url: 'https://nextjs.org' },
    { name: 'TypeScript', logo: 'devicon-typescript-plain', url: 'https://www.typescriptlang.org' },
    { name: 'Tailwind CSS', logo: 'devicon-tailwindcss-original', url: 'https://tailwindcss.com' },
  ];

  return (
    <>
        <SchemaOrg headline="Riley Hoffman - Web Developer" description="I'm a front-end developer with a passion for building accessible and responsive web applications. I quickly learn new concepts and love adding to my growing skill set. I am a proactive problem solver who enjoys writing future-proof, understandable code that fosters collaboration with other developers." image="/static/media/riley.d8092b303038937a099e.jpg" datePublished="2024-07-04T09:25:01.340Z" />
        <CoverImage width={1920} height={1080} srcImg="/api/optimize-image?path=/clouds.webp&width=1920&format=webp">
            <FirstFoldContent />
        </CoverImage>
        <MyJourneyWrapper> 
            <MyJourneyContent />
        </MyJourneyWrapper>
        <LazyLoadLink href="/devicon.css" rel="stylesheet" targetRef={targetRef} />
        <section className="pt-8 pb-12 border-solid border-t-2 gradient-border" ref={targetRef}>
          <div className="max-w-screen-xl container mx-auto text-center">
            <SiteTechStack technologies={technologies} />
          </div>
        </section>
    </>
  )
}

