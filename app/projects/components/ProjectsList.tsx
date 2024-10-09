'use client';
import { ProjectBox } from './ProjectBox';
import { ProjectContent } from './ProjectContent';
import { useFetchFirebaseData } from '../../../hooks/useFetchFirebaseData';
import type { Project } from './ProjectContent';
import { ProjectImages } from './ProjectImages';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProjectsList() {
  const { data: projects, loading, error } = useFetchFirebaseData<Project[]>('/projects');

  if (loading) {
    return <div className="min-h-screen pt-44 text-center text-3xl"><span>Loading... <FontAwesomeIcon className="block mx-auto text-3xl animate-[rotate_5s_infinite]" icon={faGear} /></span></div>;
  }

  if (error || !projects) {
    return <div className="min-h-screen pt-44 text-center text-3xl"><span>Error loading projects. Please try again later.</span></div>;
  }

  const categories: string[] = Array.from(new Set(projects.map((p: Project) => p.category)));

  return (
    <div className="pt-5 pb-20 overflow-hidden">
      {categories.map((category: string, idx: number) => (
        <ProjectCategory key={category} category={category} index={idx} projects={projects} />
      ))}
    </div>
  );
}

function ProjectCategory({ category, index, projects }: { category: string; index: number; projects: Project[] }) {
  const filteredProjects = projects.filter((p: Project) => p.category === category);

  return (
    <>
      <h2 className="max-w-screen-xl text-2xl pb-5 leading-normal md:text-3xl">{category} Projects</h2>
      <ul className="max-w-screen-xl pb-5 text-base" aria-label={`${category} Projects`}>
        {filteredProjects.map((project: Project, idx: number) => (
          <ProjectBox key={project.title} inverted={idx % 2 !== 0 ? 'inverted' : ''} animation={project.animation} isFirst={index === 0 && idx === 0}>
            <ProjectContent {...project} imgUrl={ProjectImages[project.title]} isFirst={index === 0 && idx === 0} />
          </ProjectBox>
        ))}
      </ul>
    </>
  );
}
