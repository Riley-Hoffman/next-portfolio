import type { Metadata } from "next";
import SchemaOrg from "../components/SchemaOrg";
import ProjectsList from "./components/ProjectsList";
import { fetchFirebaseData } from "../../lib/fetchFirebaseData";
import type { Project } from "./components/ProjectContent";

export const metadata: Metadata = {
  title: "Projects",
  description: "View past projects by Riley Hoffman - Web Developer.",
  metadataBase: new URL("https://rileyhoffman.com/projects"),
  alternates: { canonical: "/" },
  openGraph: {
    images:
      "https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/thumbnail.jpg",
    title: "Projects",
    url: "https://rileyhoffman.com/projects/",
  },
};

export default async function ProjectsPage() {
  const projects = await fetchFirebaseData<Project[]>("/projects");

  return (
    <>
      <SchemaOrg
        headline="Projects - Riley Hoffman - Web Developer"
        description="View past projects by Riley Hoffman - Web Developer."
        image="https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/thumbnail.jpg"
        datePublished="2024-07-04T09:25:01.340Z"
      />
      <h1 className="gradient-border inverted mb-7 mt-0 border-b-2 bg-[#eee2f3] px-5 py-10 text-center text-3xl leading-normal contrast-more:bg-white md:text-5xl md:leading-normal">
        Projects
      </h1>
      <ProjectsList initialProjects={projects ?? []} />
    </>
  );
}
