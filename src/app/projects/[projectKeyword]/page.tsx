"use client";

import projects from "@/src/app/projects/projects";
import { use } from "react";

const projectKeywordIsValid = (keyword: string) => {
  const validKeywords = projects.map((project) => project.keyword);
  return validKeywords.includes(keyword);
};

const ProjectNotFound = () => (
  <div>
    <h1>Project Not Found</h1>
    <p>The project you are looking for does not exist.</p>
    <p>
      Please check the URL or return to the{" "}
      <a href="/projects">projects list</a>.
    </p>
  </div>
);

export default function DynamicProjectPage({
  params,
}: {
  params: Promise<{ projectKeyword: string }>;
}) {
  const { projectKeyword } = use(params);

  // TODO: Nødvendig å validere her? Vil uansett ikke finne noe under
  if (!projectKeywordIsValid(projectKeyword)) {
    return <ProjectNotFound />;
  }

  const project = projects.find((proj) => proj.keyword === projectKeyword);

  if (!project) {
    return <ProjectNotFound />;
  }

  return (
    <div>
      <h1>{project.title} Project</h1>
      <p>Details about the {project.title} project go here.</p>
    </div>
  );
}
