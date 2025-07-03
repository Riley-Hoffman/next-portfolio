import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { NewTabContent } from '@/app/components/shared/NewTabContent'
import { EXTERNAL_LINK_ATTR } from '@/app/constants/externalLinkAttr'
import { Project } from '@/app/types/projects/Project.types'

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
  const projectLinkClasses = 'button m-5 block w-fit py-1 px-3'

  const renderLink = (url: string, label: string, isInternal?: boolean) =>
    isInternal ? (
      <Link className={projectLinkClasses} href={url}>
        {label}
      </Link>
    ) : (
      <a className={projectLinkClasses} href={url} {...EXTERNAL_LINK_ATTR}>
        {label}
        <NewTabContent />
      </a>
    )

  return (
    <>
      <div className="basis-1/2 pb-10 pt-5">
        <h3 className="pb-4 text-2xl">{title}</h3>
        <p className="mb-8 font-poppins text-heading">{skills}</p>
        <p className="text-balance pb-4">{description}</p>
        <h4 className="mb-8 text-base">{title} Links:</h4>
        {renderLink(liveUrl, `Visit ${title}`, internal)}
        {gitUrl && renderLink(gitUrl, `${title} Repo`)}
      </div>
      <div className="relative basis-1/2">
        <Image
          className={clsx('lg:size-full', {
            'md:mr-auto': inverted,
            'md:ml-auto': !inverted,
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
