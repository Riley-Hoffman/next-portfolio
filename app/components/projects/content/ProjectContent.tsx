import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { NewTabContent } from '@/app/components/shared/NewTabContent'
import { SM, MD, LG } from '@/app/constants/breakpoints'
import { EXTERNAL_LINK_ATTR } from '@/app/constants/externalLinkAttr'
import { Project } from '@/app/types/projects/Project.types'

export const ProjectContent = ({
  alt,
  blurDataUrl,
  description,
  gitUrl,
  imgUrl,
  internal,
  liveUrl,
  skills,
  title,
  inverted,
  isFirst,
}: Project) => {
  const renderLink = (url: string, label: string, isInternal?: boolean) =>
    isInternal ? (
      <Link href={url}>{label}</Link>
    ) : (
      <a href={url} {...EXTERNAL_LINK_ATTR}>
        {label}
        <NewTabContent />
      </a>
    )

  return (
    <>
      <div>
        <h3>{title}</h3>
        <p>{skills}</p>
        <p>{description}</p>
        <h4>{title} Links:</h4>
        {renderLink(liveUrl, `Visit ${title}`, internal)}
        {gitUrl && renderLink(gitUrl, `${title} Repo`)}
      </div>
      <div>
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
          sizes={`(max-width: ${SM}) 100vw, (max-width: ${MD}) 75vw, (max-width: ${LG}) 50vw, 28vw`}
          priority={isFirst}
          placeholder="blur"
          blurDataURL={blurDataUrl}
        />
      </div>
    </>
  )
}
