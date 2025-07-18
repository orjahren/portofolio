import style from "./footer.module.scss";

const Footer = ({ githubRepoUrl }: { githubRepoUrl: string }) => (
  <footer className={style.footer}>
    <p>
      🚀 Made with coffee in Norway, 2023.{" "}
      <a href={githubRepoUrl}>Source code on Github</a> 🦄
    </p>
  </footer>
);

export default Footer;
