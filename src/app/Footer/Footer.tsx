import style from "./footer.module.scss";

const Footer = ({ githubRepoUrl }: { githubRepoUrl: string }) => (
  <footer className={style.footer}>
    <div>
      <p>
        <a href="/">Home</a> | <a href="/projects">Projects</a> |{" "}
        <a href="/about">About</a> | <a href="/contact">Contact</a>
      </p>
    </div>
    <div>
      <p>
        🚀 Made with coffee in Norway, 2023-25.{" "}
        <a href={githubRepoUrl}>Source code on Github</a>. 🦮
      </p>
      <p>0372 Oslo.</p>
    </div>
  </footer>
);

export default Footer;
