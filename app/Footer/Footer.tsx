import style from "./footer.module.scss";

const Footer = () => (
  <div className={style.footer}>
    <div>
      <p>
        🚀 Made with coffee in Norway, 2023.{" "}
        <a href="https://github.com/orjahren/portofolio">
          Source code on Github
        </a>{" "}
        🦄
      </p>
    </div>
  </div>
);

export default Footer;
