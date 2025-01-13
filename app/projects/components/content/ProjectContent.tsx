import Link from 'next/link'
import Image from 'next/image'
import { NewTabContent } from '@/app/components/utils/NewTabContent'

export interface Project {
  title: string
  skills: string
  description: string
  internal?: boolean
  liveUrl: string
  gitUrl?: string
  imgUrl: string
  alt: string
  animation?: string
  category: string
  isFirst?: boolean
}
const projectLinkClasses = 'button mx-5 px-3 py-1 uppercase'

export const ProjectContent = ({
  title,
  skills,
  description,
  internal,
  liveUrl,
  gitUrl,
  alt,
  imgUrl,
  isFirst,
}: Project) => {
  const renderLink = (
    url: string,
    content: React.ReactElement,
    isInternal?: boolean
  ) =>
    isInternal ? (
      <Link className={projectLinkClasses} href={url}>
        {content}
      </Link>
    ) : (
      <a
        className={projectLinkClasses}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
        <NewTabContent />
      </a>
    )

  const liveContent = (
    <>
      <span className="sr-only">{title} </span>Live
    </>
  )

  const repoContent = (
    <>
      <span className="sr-only">{title} </span>Repo
    </>
  )

  return (
    <>
      <div className="basis-2/4 pb-10 pt-5">
        <h3 className="pb-4 text-2xl">{title}</h3>
        <p className="mb-8 pb-4 font-poppins text-heading">{skills}</p>
        <p className="pb-4">{description}</p>
        <h4 className="mb-8 text-base">{title} Links:</h4>
        {renderLink(liveUrl, liveContent, internal)}
        {gitUrl && renderLink(gitUrl, repoContent)}
      </div>
      <div className="relative basis-2/4 text-center">
        <Image
          className="w-[35.563rem] max-w-full"
          alt={alt}
          src={imgUrl}
          title={title}
          height={569}
          width={569}
          priority={isFirst}
        />
      </div>
    </>
  )
}
