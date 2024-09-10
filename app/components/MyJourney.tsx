import Image from 'next/image';
import Link from 'next/link';
import headshot from '../../images/headshot.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export const MyJourney: React.FC = () =>  {
  return (
    <div className="max-w-screen-xl">
        <div className="items-center md:flex">
            <div className="min-h-96 md:w-1/3">
                <Image className="size-96 max-w-full object-cover border-x-2 clip-path-cut-corners" src={headshot} alt="Riley with a flower behind his ear. Shot in black and white." width="384" height="452" priority={false} />
            </div>
            <div className="py-6 m-6 bg-[whitesmoke] border-2 border-[#d6d2ee] md:w-2/3 lg:px-24 contrast-more:bg-white">
                <h2>My Journey</h2>
                <p>My career journey began in customer service, tech support, and various non-profit organizations. Although these roles were valuable, I was eager to find a path that would truly ignite my passion and offer more engaging skills. This pursuit led me to web development through one of these non-profits.</p> 
                <p>Captivated by the potential for creativity and continous growth, I completed Web Development Bootcamp at Juno College of Technology in 2021.</p> 
                <p>I believe that by prioritizing accessibility in our work as web developers we make our contributions to the online world more meaningful.</p>
                <p className="mt-10">
                    <Link className="inline-block motion-safe:hover:animate-[wiggle_1s] button group" href="https://www.linkedin.com/in/riley-hoffman-014623213" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="p-2 box-content text-5xl text-zinc bg-pink-200 group-hover:bg-zinc group-hover:text-pink-200" icon={faLinkedinIn} /> 
                        <span className="px-6 new-tab">Follow me on LinkedIn<span className="sr-only">(opens in a new tab)</span><span aria-hidden="true"></span></span>
                    </Link>
                </p>
            </div>
        </div>
    </div>
  )
}

