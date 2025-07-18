import Card from "@mui/material/Card";

import style from "./index.module.scss";

const ProjectCard = ({ project }: { project: ProjectType }) => (
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

const ProjectShowcase = () => {
  const projects: ProjectType[] = [
    {
      title: "Nostalgeez",
      description:
        "A platform for finding when you added what songs to what playlists.",
      externalLink: "https://github.com/orjahren/nostalgeez",
    },
    {
      title: "Summer dashboard",
      description:
        "A web service for creating and managing summer bucketslists.",
      externalLink: "https://github.com/orjahren/summer-dashboard",
    },
  ] as const;

  return (
    <div className={style.projectShowcase}>
      <p>Some side projects</p>
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
};

export default ProjectShowcase;
