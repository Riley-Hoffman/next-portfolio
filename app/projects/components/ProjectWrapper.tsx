import { ProjectBox } from './ProjectBox';
import { ProjectContent } from './ProjectContent';
import { Project } from './ProjectData';

interface ProjectWrapperProps {
  project: Project;
  inverted?: string;
  isFirst?: boolean;
}

export const ProjectWrapper: React.FC<ProjectWrapperProps> = ({ project, inverted, isFirst }) => {
  return (
    <ProjectBox
      inverted={inverted}
      animation={project.animation}
      isFirst={isFirst}
    >
      <ProjectContent
        title={project.title}
        skills={project.skills}
        description={project.description}
        internal={project.internal}
        liveUrl={project.liveUrl}
        gitUrl={project.gitUrl}
        imgAlt={project.imgAlt}
        imgUrl={project.imgUrl}
        isFirst={isFirst}
      />
    </ProjectBox>
  );
};