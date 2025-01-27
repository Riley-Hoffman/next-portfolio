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
  const SrText = () => <span className="sr-only">{title} </span>

  const renderLink = (url: string, label: string, isInternal?: boolean) =>
    isInternal ? (
      <Link className={projectLinkClasses} href={url}>
        <SrText />
        {label}
      </Link>
    ) : (
      <a
        className={projectLinkClasses}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SrText />
        {label}
        <NewTabContent />
      </a>
    )

  return (
    <>
      <div className="basis-2/4 pb-10 pt-5">
        <h3 className="pb-4 text-2xl">{title}</h3>
        <p className="mb-8 pb-4 font-poppins text-heading">{skills}</p>
        <p className="text-balance pb-4">{description}</p>
        <h4 className="mb-8 text-base">{title} Links:</h4>
        {renderLink(liveUrl, 'Live', internal)}
        {gitUrl && renderLink(gitUrl, 'Repo')}
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
