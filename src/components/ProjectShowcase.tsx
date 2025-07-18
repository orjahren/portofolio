"use client";
import Card from "@mui/material/Card";

import style from "./index.module.scss";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card onClick={handleOpen} className={style.projectCard}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={style.modalBox}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className={style.modalTitle}
          >
            {project.title}
          </Typography>
          <Typography
            id="modal-modal-description"
            className={style.modalDescription}
          >
            {project.blurb}
            <br />
            <a
              href={project.localLink || project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to project
            </a>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

const ProjectShowcase = () => {
  const projects: ProjectType[] = [
    {
      title: "Nostalgeez",
      blurb:
        "A platform for finding when you added what songs to what playlists.",
      description:
        "A platform for finding when you added what songs to what playlists.",
      externalLink: "https://github.com/orjahren/nostalgeez",
    },
    {
      title: "Summer dashboard",
      blurb: "A web service for creating and managing summer bucketslists.",
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
