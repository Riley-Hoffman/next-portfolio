import { useRef } from 'react';
import Link from 'next/link';
import { NewTabSrText } from '../../components/NewTabSrText';
import { useTimedEffect } from '../../../hooks/useTimedEffect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export const LinkedInButton: React.FC = () => {
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const { triggerEffect } = useTimedEffect(1000);

    const applyEffect = (isCounting: boolean) => {
        buttonRef.current?.classList.toggle('motion-safe:animate-[wiggle_1s]', isCounting);
    };

    return (
        <Link
            ref={buttonRef}
            className="inline-block button group"
            href="https://www.linkedin.com/in/riley-hoffman-014623213"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => triggerEffect(applyEffect)}
        >
            <FontAwesomeIcon className="p-2 box-content text-5xl text-zinc bg-pink-200 group-hover:bg-zinc group-hover:text-pink-200" icon={faLinkedinIn} /> 
            <span className="px-6 new-tab">Follow me on LinkedIn<NewTabSrText icon={true} /></span>
        </Link>
    );
};
