import Footer from "@/src/app/Footer";
import Header from "@/src/app/Header";

import IndexContent from "@/src/components/IndexContent";
import ProjectShowcase from "@/src/components/ProjectShowcase";

export default () => (
  <>
    <Header />
    <IndexContent />
    <ProjectShowcase />
    <Footer githubRepoUrl={"https://github.com/orjahren/portofolio"} />
  </>
);
