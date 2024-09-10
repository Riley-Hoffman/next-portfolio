import SchemaOrg from '../components/SchemaOrg';
import { LazyLoadLink } from '../hooks/LazyLoadLink';
import { CoverImage } from './components/CoverImage';
import { MyJourneyWrapper } from './components/MyJourneyWrapper';
import { MyJourney } from './components/MyJourney';
import { SiteTechStack } from './components/SiteTechStack';

interface Tech {
  name: string;
  logo: string;
  url: string;
}

export default function Home() {
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
            <h1 className="font-semibold m-0 text-3xl leading-normal md:text-4xl md:leading-normal" aria-live="polite">Riley Hoffman</h1>
            <p className="mt-0 relative after:absolute after:bottom-[-0.75rem] after:left-5 after:bg-purple-200 after:h-3 after:w-5"><span className="inline-block w-40 m-o mr-auto border-r-2 border-purple-200 border-solid whitespace-nowrap overflow-hidden tracking-widest font-medium motion-safe:animate-typetext">Web Developer</span></p>
            <p className="mt-8 font-medium">I&apos;m a front-end developer with a passion for building accessible and responsive web applications. I quickly learn new concepts and love adding to my growing skill set. I am a proactive problem solver who enjoys writing future-proof, understandable code that fosters collaboration with other developers.</p>
        </CoverImage>
        <MyJourneyWrapper>
            <MyJourney/>
        </MyJourneyWrapper>
        <LazyLoadLink href="/devicon.css" rel="stylesheet" targetSelector="#siteTechStack" />
        <section className="pt-8 pb-12 border-solid border-t-2 gradient-border" id="siteTechStack">
      <div className="max-w-screen-xl container mx-auto text-center">
        <h2 className="text-2xl font-inconsolata mb-8">Technologies Used To Build This Site</h2>
        <SiteTechStack technologies={technologies} />
        </div>
      </section>
    </>
  )
}

