import type { Metadata } from "next"
import {
  SchemaGenerator,
  SchemaGeneratorProps,
} from "../components/SchemaGenerator"
import ProjectsList from "./components/ProjectsList"
import { fetchFirebaseData } from "../../lib/fetchFirebaseData"
import type { Project } from "./components/ProjectContent"
import { getBaseUrl, getPageTitle, getImageUrl } from "../../lib/constants"

const description = `View past projects by ${getPageTitle()}.`

export const metadata: Metadata = {
  title: "Projects",
  description: description,
  metadataBase: new URL(`${getBaseUrl("/projects")}`),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: getImageUrl(),
    title: "Projects",
    url: `${getBaseUrl("/projects")}`,
  },
}

export default async function ProjectsPage() {
  const projects = await fetchFirebaseData<Project[]>("/projects")
  const schemaData: SchemaGeneratorProps["schemaData"] = {
    title: "Projects",
    description,
    urlPath: "/projects",
    publishDate: "2024-07-04T09:25:01.340Z",
    schemaType: "WebPage",
  }
  return (
    <>
      <SchemaGenerator schemaData={schemaData} />
      <h1 className="heading-one inverted">
        Projects
      </h1>
      <ProjectsList initialProjects={projects ?? []} />
    </>
  )
}
