import { WebPage, WithContext } from 'schema-dts';
import SchemaOrg from '../components/SchemaOrg';
import { LazyLoadLink } from '../hooks/LazyLoadLink';
import { CoverImage } from './components/CoverImage';
import { MyJourney } from './components/MyJourney';
import { SiteTechStack } from './components/SiteTechStack';
import { MyJourneyWrapper } from './components/MyJourneyWrapper';
import clouds from '../images/clouds.webp';

const structuredData: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    headline: 'Riley Hoffman - Web Developer',
    description:
      "I'm a front-end developer with a passion for building accessible and responsive web applications. I quickly learn new concepts and love adding to my growing skill set. I am a proactive problem solver who enjoys writing future-proof, understandable code that fosters collaboration with other developers.",
    image: '/static/media/riley.d8092b303038937a099e.jpg',
    datePublished: '2024-07-04T09:25:01.340Z',
    author: {
      '@type': 'Person',
      name: 'Riley Hoffman',
      url: 'https://rileyhoffman.com',
    },
  };

export default function Home() {
  return (
    <>
        <SchemaOrg structuredData={structuredData} />
        <CoverImage width={1920} height={1080} srcImg={clouds}>
            <h1 className="font-semibold m-0 text-3xl leading-normal md:text-4xl md:leading-normal" aria-live="polite">Riley Hoffman</h1>
            <p className="mt-0 relative after:absolute after:bottom-[-0.75rem] after:left-5 after:bg-purple-200 after:h-3 after:w-5"><span className="inline-block w-40 m-o mr-auto border-r-2 border-purple-200 border-solid whitespace-nowrap overflow-hidden tracking-widest font-medium motion-safe:animate-typetext">Web Developer</span></p>
            <p className="mt-8 font-medium">I&apos;m a front-end developer with a passion for building accessible and responsive web applications. I quickly learn new concepts and love adding to my growing skill set. I am a proactive problem solver who enjoys writing future-proof, understandable code that fosters collaboration with other developers.</p>
        </CoverImage>
        <MyJourneyWrapper>
            <MyJourney/>
        </MyJourneyWrapper>
        <LazyLoadLink href="/devicon.css" rel="stylesheet" targetSelector="#siteTechStack" />
        <SiteTechStack/>
    </>
  )
}

