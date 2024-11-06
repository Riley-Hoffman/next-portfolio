import type { Metadata } from "next";
import SchemaOrg from "../components/SchemaOrg";
import ProjectsList from "./components/ProjectsList";
import { fetchFirebaseData } from "../../lib/fetchFirebaseData";
import type { Project } from "./components/ProjectContent";
import { WebPage, WithContext } from "schema-dts";
import {
  getBaseUrl,
  getPageTitle,
  author,
  getImageUrl,
  githubUrl,
  linkedInUrl,
} from "../../lib/constants";

const description = `View past projects by ${getPageTitle()}.`;

export const metadata: Metadata = {
  title: "Projects",
  description: description,
  metadataBase: new URL(`${getBaseUrl('/projects')}`),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: getImageUrl(),
    title: "Projects",
    url: `${getBaseUrl('/projects')}`,
  },
};

export default async function ProjectsPage() {
  const projects = await fetchFirebaseData<Project[]>("/projects");
  const schema: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: getPageTitle('Projects - '),
    description: description,
    image: getImageUrl(),
    url: `${getBaseUrl('/projects')}`,
    datePublished: "2024-07-04T09:25:01.340Z",
    mainEntity: {
      "@type": "Person",
      name: author,
      url: getBaseUrl(),
      jobTitle: "Web Developer",
      sameAs: [
        linkedInUrl,
        githubUrl,
      ],
    },
    author: {
      "@type": "Person",
      name: author,
    },
  };

  return (
    <>
      <SchemaOrg structuredData={schema} />
      <h1 className="gradient-border inverted mb-7 mt-0 border-b-2 bg-[#eee2f3] px-5 py-10 text-center text-3xl leading-normal contrast-more:bg-white md:text-5xl md:leading-normal">
        Projects
      </h1>
      <ProjectsList initialProjects={projects ?? []} />
    </>
  );
}
