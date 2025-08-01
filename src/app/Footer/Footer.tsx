import style from "./footer.module.scss";
import { Box, Typography, Link, Divider } from "@mui/material";

const Footer = ({ githubRepoUrl }: { githubRepoUrl: string }) => (
  <>
    <Divider sx={{ mb: 2 }} />
    <div className={style.footerContainer}>
      <Box component="footer" py={0} px={0}>
        <Box mt={0} textAlign="center">
          <Typography variant="body2" color="text.secondary">
            🚀 Made with coffee in Norway, 2023-25.{" "}
            <Link
              href={githubRepoUrl}
              target="_blank"
              rel="noopener"
              underline="hover"
            >
              Source code on Github
            </Link>
            . 🦮
          </Typography>
          <Typography variant="caption" color="text.secondary">
            0372 Oslo.
          </Typography>
        </Box>
      </Box>
    </div>
  </>
);

export default Footer;
