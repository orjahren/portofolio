import Footer from "@/app/Footer";
import Header from "@/app/Header";
import Image from "next/image";

import style from "./index.module.scss";
import ProfilePicture from "/public/oliver_jahren.png";

const MainContent = () => {
  const linkPairs: ReadonlyArray<[string, string]> = [
    ["LinkedIn", "https://no.linkedin.com/in/oliver-jahren"],
    ["Kattis", "https://open.kattis.com/users/oliverrj"],
    ["Github", "https://github.com/orjahren"],
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
                  search techonology
                </a>
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
                      <li>
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

export default () => (
  <>
    <Header />
    <MainContent />
    <Footer githubRepoUrl={"https://github.com/orjahren/portofolio"} />
  </>
);
