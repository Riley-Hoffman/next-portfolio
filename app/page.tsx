'use client';
import { useRef } from 'react';
import SchemaOrg from './components/SchemaOrg';
import { LazyLoadLink } from './components/LazyLoadLink';
import { CoverImage } from './components/home/CoverImage';
import { FirstFoldContent } from './components/home/FirstFoldContent';
import { MyJourney } from './components/home/MyJourney';
import { SiteTechStack } from './components/home/SiteTechStack';

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <SchemaOrg headline="Riley Hoffman - Web Developer" description="I am a web developer with a passion for building accessible and responsive web applications. I quickly learn new concepts and love adding to my growing skill set. I am a proactive problem solver who enjoys writing future-proof, understandable code that fosters collaboration with other developers." image="https://firebasestorage.googleapis.com/v0/b/rileyhoffmandotcom.appspot.com/o/thumbnail.jpg" datePublished="2024-07-04T09:25:01.340Z" />
      <CoverImage width={1920} height={1080} srcImg="https://firebasestorage.googleapis.com/v0/b/rileyhoffmandotcom.appspot.com/o/clouds.webp">
          <FirstFoldContent />
      </CoverImage>
      <MyJourney /> 
      <LazyLoadLink href="/devicon.css" rel="stylesheet" targetRef={targetRef} />
      <section className="pt-8 pb-12 border-solid border-t-2 gradient-border" ref={targetRef}>
        <div className="max-w-screen-xl container mx-auto text-center">
          <SiteTechStack />
        </div>
      </section>
    </>
  )
}

