"use client";
import Card from "@mui/material/Card";

import style from "./projects.module.scss";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import projects from "@/src/data/projects";

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
          </Typography>
          <div className={style.modalLinks}>
            <a href={project.localLink} rel="noopener noreferrer">
              Read more
            </a>
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to project
            </a>
          </div>
        </Box>
      </Modal>
    </>
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
