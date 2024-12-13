import Link from "next/link"
import Image from "next/image"
import { NewTabSrText } from "../../components/NewTabSrText"

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
const commonClasses = "button mx-5 px-3 py-1 uppercase"

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
      <Link className={commonClasses} href={url}>
        {content}
      </Link>
    ) : (
      <a
        className={commonClasses}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
        <NewTabSrText icon={true} />
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
      <div className="project-info basis-2/4 pb-10 pt-5">
        <h3 className="pb-4 text-2xl">{title}</h3>
        <p className="mb-8 pb-4 font-poppins text-lg" translate="no">
          {skills}
        </p>
        <p className="pb-4">{description}</p>
        <h4 className="mb-8 text-base">
          <span translate="no">{title}</span> Links:
        </h4>
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
