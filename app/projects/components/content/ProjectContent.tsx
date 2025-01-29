import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { NewTabContent } from '@/app/components/utils/NewTabContent'

export interface Project {
  title: string
  skills: string
  description: string
  internal?: boolean
  liveUrl: string
  gitUrl?: string
  inverted?: boolean
  imgUrl: string
  alt: string
  animation?: string
  category: string
  isFirst?: boolean
}

export const ProjectContent = ({
  title,
  skills,
  description,
  internal,
  liveUrl,
  gitUrl,
  inverted,
  alt,
  imgUrl,
  isFirst,
}: Project) => {
  const projectLinkClasses = clsx('button mx-5 py-1 pl-3 uppercase', {
    'pr-3': internal,
    'pr-2': !internal,
  })
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
      <div className="basis-1/2 pb-10 pt-5">
        <h3 className="pb-4 text-2xl">{title}</h3>
        <p className="mb-8 pb-4 font-poppins text-heading">{skills}</p>
        <p className="text-balance pb-4">{description}</p>
        <h4 className="mb-8 text-base">{title} Links:</h4>
        {renderLink(liveUrl, 'Live', internal)}
        {gitUrl && renderLink(gitUrl, 'Repo')}
      </div>
      <div className="relative basis-1/2">
        <Image
          className={clsx('w-[35.563rem] max-w-full', {
            'mr-auto': inverted,
            'ml-auto': !inverted,
          })}
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
