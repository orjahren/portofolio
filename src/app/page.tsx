import Footer from "@/src/app/Footer";
import Header from "@/src/app/Header";
import Image from "next/image";

import style from "./index.module.scss";
import ProfilePicture from "/public/oliver_jahren.png";
import ProjectCard from "@/src/components/projects/ProjectCard";

const MainContent = () => {
  const linkPairs: ReadonlyArray<[string, string]> = [
    ["Github", "https://github.com/orjahren"],
    ["LinkedIn", "https://no.linkedin.com/in/oliver-jahren"],
    ["Kattis", "https://open.kattis.com/users/oliverrj"],
  ];

  return (
    <div className={style.mainContentWrapper}>
      <div className={style.contentDiv}>
        <div>
          <div className={style.textDiv}>
            <div>
              <h1>Oliver Jahren</h1>
              <p className={style.email}>oliverrj@ifi.uio.no</p>
            </div>
            <div className={style.contentText}>
              <p>
                I am studiyng for a{" "}
                <a href="https://www.uio.no/english/studies/programmes/informatics-programming-master/index.html">
                  masters degree in computer science at the University of Oslo
                </a>
                , previously having completed a bachelor's degree in{" "}
                <a href="https://www.uio.no/studier/program/informatikk-sprakteknologi/">
                  natural language processing and artificial intelligence
                </a>{" "}
                at the same university.
              </p>
              <p>
                I work as a web developer on the research service{" "}
                <a href="https://nettskjema.no/?lang=en">Nettskjema.no</a>, and
                as a teaching assistant in{" "}
                <a href="https://www.uio.no/studier/emner/matnat/ifi/IN4120/index-eng.html">
                  search technology
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <div className={style.photoAndLinks}>
          <div>
            <div className={style.personalDiv}>
              <div>
                <div className={style.profilePictureDiv}>
                  <Image
                    src={ProfilePicture}
                    alt="Picture of the author"
                    width={300}
                    placeholder="blur"
                  />
                  <p style={{ fontSize: "1rem", marginBottom: 10 }}>
                    <i>All rights reserved</i>
                  </p>
                </div>
              </div>
              <div>
                <div className={style.linkDiv}>
                  <ul>
                    {linkPairs.map(([name, url]) => (
                      <li key={url}>
                        <a href={url}>{name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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

export default () => (
  <>
    <Header />
    <MainContent />
    <ProjectShowcase />
    <Footer githubRepoUrl={"https://github.com/orjahren/portofolio"} />
  </>
);
