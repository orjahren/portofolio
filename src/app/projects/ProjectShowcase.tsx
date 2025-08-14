"use client";
import Card from "@mui/material/Card";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Button, Stack } from "@mui/material";
import Link from "next/link";

import style from "./projects.module.scss";

import projects from "@/src/app/projects/projects";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <Card className={style.projectCard}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
        <Link href={project.localLink} passHref>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            component="p"
          >
            Read more
          </Button>
        </Link>
        {project.externalLink && (
          // TODO: Burde skille på "external url" og "github url"?
          <Link href={project.externalLink} passHref>
            <Button
              variant="contained"
              endIcon={<OpenInNewIcon />}
              component="p"
            >
              Go to project
            </Button>
          </Link>
        )}
      </Stack>
    </Card>
  );
};

const ProjectShowcase = () => {
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
