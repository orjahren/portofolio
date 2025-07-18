import Card from "@mui/material/Card";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <Card>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a
        href={project.localLink || project.externalLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </Card>
  );
};

export default ProjectCard;
