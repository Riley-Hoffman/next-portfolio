import Link from 'next/link';
import Image from 'next/image';

interface ProjectLinksProps {
  title: string;
  skills: string;
  description: string;
  internal?: boolean;
  liveUrl: string;
  gitUrl?: string;
  imgAlt: string;
  imgUrl: string;
  isFirst?: boolean;
}

export function ProjectContent({ title, skills, description, internal, liveUrl, gitUrl, imgAlt, imgUrl, isFirst }: ProjectLinksProps) {
  const commonClasses = "uppercase py-1 px-3 button";
  const liveContent = (
    <>
      <span className="sr-only">{title} </span>Live
    </>
  );

  return (
    <>
    <div className="pt-5 pb-10 basis-2/4 project-info">
        <h2 className="pb-4">{title}</h2>
        <p className="pb-4 mb-8 text-lg font-poppins" translate="no">
          {skills}
        </p>
        <p className="pb-4">{description}</p>
        <h3 className="mb-8">
          <span translate="no">{title} </span>Links:
        </h3>
        {internal ? (
          <Link className={`mx-5 p-y-1 p-x-4 ${commonClasses}`} href={liveUrl}>
            {liveContent}
          </Link>
        ) : (
          <a className={`mx-5 p-y-1 p-x-4 new-tab ${commonClasses}`} href={liveUrl} target="_blank" rel="noopener noreferrer" >
            {liveContent}
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
        {gitUrl && (
          <a className={`mr-5 ml-3 ${commonClasses} new-tab`} href={gitUrl} target="_blank" rel="noopener noreferrer" >
            <span className="sr-only">{title} </span>Repo
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
      </div>
      <div className="text-center relative basis-2/4">
        <Image alt={imgAlt} src={imgUrl} title={title} height="570" width="570" priority={isFirst} />
      </div>
    </>
  );
}
