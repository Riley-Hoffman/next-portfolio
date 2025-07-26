import Image from 'next/image'
import clsx from 'clsx'
import { SM, MD } from '@/app/constants/breakpoints'
import { Project } from '@/app/types/projects/Project.types'
import { LinkWrapper } from '@/app/components/shared/LinkWrapper'

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
  const renderLink = (url: string, label: string, isInternal?: boolean) => (
    <LinkWrapper href={url} showNewTabIcon={!isInternal}>
      {label}
    </LinkWrapper>
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
          className={clsx({
            'lg:mr-auto': inverted,
            'lg:ml-auto': !inverted,
          })}
          alt={alt}
          src={imgUrl}
          title={title}
          height={569}
          width={569}
          sizes={`(max-width: ${SM}px) 100vw, (max-width: ${MD}px) 75vw, 569px`}
          priority={isFirst}
          placeholder="blur"
          blurDataURL={blurDataUrl}
        />
      </div>
    </>
  )
}
