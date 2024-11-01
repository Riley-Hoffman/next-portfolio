import { ProjectBox } from "./ProjectBox";
import { ProjectCatHeading } from "./ProjectCatHeading";
import { ProjectContent } from "./ProjectContent";
import type { Project } from "./ProjectContent";

export default function ProjectsList({
  initialProjects,
}: {
  initialProjects: Project[];
}) {
  const projects = initialProjects;

  if (!projects || projects.length === 0) {
    return (
      <div className="min-h-screen pt-44 text-center text-3xl">
        <span>Error loading projects.</span>
      </div>
    );
  }

  const categories: string[] = Array.from(
    new Set(projects.map((p: Project) => p.category)),
  );

  return (
    <div className="overflow-hidden pb-20 pt-5">
      {categories.map((category: string, idx: number) => (
        <ProjectCategory
          key={category}
          category={category}
          index={idx}
          projects={projects}
        />
      ))}
    </div>
  );
}

function ProjectCategory({
  category,
  index,
  projects,
}: {
  category: string;
  index: number;
  projects: Project[];
}) {
  const filteredProjects = projects.filter(
    (p: Project) => p.category === category,
  );

  return (
    <>
      <ProjectCatHeading category={category} />
      <ul
        className="max-w-screen-xl pb-5 text-base"
        aria-label={`${category} Projects`}
      >
        {filteredProjects.map((project: Project, idx: number) => {
          const originalIndex =
            projects.findIndex((p) => p.title === project.title) + 1;
          return (
            <ProjectBox
              key={project.title}
              inverted={originalIndex % 2 === 0 ? "inverted" : ""}
              animation={project.animation}
              isFirst={index === 0 && project === filteredProjects[0]}
            >
              <ProjectContent {...project} isFirst={index === 0 && idx === 0} />
            </ProjectBox>
          );
        })}
      </ul>
    </>
  );
}
