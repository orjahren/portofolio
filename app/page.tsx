import Footer from "@/app/Footer";
import Header from "@/app/Header";

import style from "./index.module.scss";

export default () => {
  const linkParis: ReadonlyArray<[string, string]> = [
    ["LinkedIn", "vg.no"],
    ["Kattis", "vg.no"],
    ["Github", "vg.no"],
  ];

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className={style.mainContent}>
        <div className={style.personalDiv}>
          <h1>Oliver Jahren</h1>
          <p>Etudiante maisterene</p>
          <p>Huomo di sziencia</p>
        </div>
        <div className={style.linkDiv}>
          <ul>
            {linkParis.map(([name, url]) => (
              <li>
                <a href={url}>{name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
