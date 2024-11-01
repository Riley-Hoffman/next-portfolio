import type { Metadata } from "next";
import SchemaOrg from "../components/SchemaOrg";
import ProjectsList from "./components/ProjectsList";
import { db } from "../../lib/firebaseConfig";
import { ref, get } from "firebase/database";
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

async function fetchProjectsData(): Promise<Project[]> {
  try {
    const snapshot = await get(ref(db, "/projects"));
    return snapshot.exists() ? snapshot.val() : [];
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export default async function Projects() {
  const initialProjects = await fetchProjectsData();

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
      <ProjectsList initialProjects={initialProjects} />
    </>
  );
}
