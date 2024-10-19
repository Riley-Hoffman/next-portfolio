import type { Metadata } from 'next';
import SchemaOrg from '../../components/SchemaOrg';
import { faLessThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ParticleCleanup } from './components/ParticleCleanup';

export const metadata: Metadata = {
    title: 'Particle Cleanup Game',
    description: 'How quickly can you clear all the particles from the board using your cursor or finger?',
    metadataBase: new URL('https://rileyhoffman.com/projects/particle-cleanup'),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      images: 'https://firebasestorage.googleapis.com/v0/b/rileyhoffmandotcom.appspot.com/o/thumbnail.jpg',
      title: 'Particle Cleanup Game',
      url: 'https://rileyhoffman.com/projects/particle-cleanup/',
    },
};

export default function ParticleCleanupWrapper() {
  return (
    <>
      <SchemaOrg headline="Particle Cleanup Game - Riley Hoffman - Web Developer" description="How quickly can you clear all the particles from the board using your cursor or finger?" image="https://firebasestorage.googleapis.com/v0/b/rileyhoffmandotcom.appspot.com/o/thumbnail.jpg" datePublished="2024-07-04T09:25:01.340Z" />
      <div className="pb-16">
        <h1 className="text-center text-3xl leading-normal bg-[#eee2f3] border-b-2 mb-7 mt-0 py-10 px-5 gradient-border inverted md:leading-normal md:text-5xl contrast-more:bg-white">Particle Cleanup Game</h1>
        <div className="max-w-screen-md">
          <h2 translate="no"><span translate="no">React</span>, TSX, SCSS</h2>
          <p>How quickly can you clear all the particles from the board using your cursor or finger?</p>
          <ol className="pr-5 pl-10 text-xl leading-normal numbered-icons sm:flex md:text-2xl md:leading-normal" aria-label="Medal Criteria">
            <li className="before:bg-[#8a7400]"><span className="sr-only">Gold, Less Than 15 seconds.</span><span aria-hidden="true"><FontAwesomeIcon icon={faLessThan} /> 15s &nbsp;&nbsp;</span></li>
            <li className="before:bg-[#737373]"><span className="sr-only">Silver, 15 to 20 seconds.</span><span aria-hidden="true">15s-20s &nbsp;&nbsp;</span></li>
            <li className="before:bg-[#a2652a]"><span className="sr-only">Bronze, 21 to 25 seconds.</span><span aria-hidden="true">21s-25s &nbsp;&nbsp;</span></li>
          </ol>
          <ParticleCleanup />
        </div>
      </div>
    </>
    );
  };