import Link from 'next/link';
import Image from 'next/image';
import { NewTabSrText } from '../../components/NewTabSrText';

export interface Project {
  title: string;
  skills: string;
  description: string;
  internal?: boolean;
  liveUrl: string;
  gitUrl?: string;
  imgUrl: string;
  alt: string;
  animation?: string;
  category: string;
  isFirst?: boolean;
}

export function ProjectContent({ title, skills, description, internal, liveUrl, gitUrl, alt, imgUrl, isFirst }: Project) {
  const commonClasses = "mx-5 py-1 px-3 uppercase button";
  
  const renderLink = (url: string, content: JSX.Element, isInternal?: boolean) => (
    isInternal ? (
      <Link className={commonClasses} href={url}>
        {content}
      </Link>
    ) : (
      <a className={`new-tab ${commonClasses}`} href={url} target="_blank" rel="noopener noreferrer">
        {content}
        <NewTabSrText icon={true} />
      </a>
    )
  );

  const liveContent = (
    <>
      <span className="sr-only">{title} </span>Live
    </>
  );

  const repoContent = (
    <>
      <span className="sr-only">{title} </span>Repo
    </>
  );

  return (
    <>
      <div className="pt-5 pb-10 basis-2/4 project-info">
        <h2 className="pb-4">{title}</h2>
        <p className="pb-4 mb-8 text-lg font-poppins" translate="no">{skills}</p>
        <p className="pb-4">{description}</p>
        <h3 className="mb-8">
          <span translate="no">{title} </span>Links:
        </h3>
        {renderLink(liveUrl, liveContent, internal)}
        {gitUrl && renderLink(gitUrl, repoContent)}
      </div>
      <div className="text-center relative basis-2/4">
        <Image className="max-w-full w-[35.563rem]" alt={alt} src={imgUrl} title={title} height={569} width={569} priority={isFirst} />
      </div>
    </>
  );
}
