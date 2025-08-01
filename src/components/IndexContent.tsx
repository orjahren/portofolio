import {
  Box,
  Typography,
  Link,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import Image from "next/image";
import ProfilePicture from "/public/oliver_jahren.png";
import { JSX } from "react";

const linkPairs: ReadonlyArray<[string, string, JSX.Element]> = [
  ["Github", "https://github.com/orjahren", <GitHubIcon />],
  ["LinkedIn", "https://www.linkedin.com/in/orjahren", <LinkedInIcon />],
  ["Kattis", "https://open.kattis.com/users/oliverrj", <LanguageIcon />],
];

const IndexContent = () => (
  <Box sx={{ py: 4, px: { xs: 2, md: 6 } }}>
    <Paper
      elevation={3}
      sx={{ p: { xs: 2, md: 4 }, maxWidth: 900, mx: "auto" }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid>
          <Typography variant="h3" component="h1" gutterBottom>
            Oliver Jahren
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            <AccountCircleIcon fontSize="small" sx={{ mr: 1 }} />
            oliverrj@ifi.uio.no
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            I am studying for a{" "}
            <Link
              href="https://www.uio.no/english/studies/programmes/informatics-programming-master/index.html"
              target="_blank"
              rel="noopener"
            >
              masters degree in computer science at the University of Oslo
            </Link>
            , previously having completed a bachelor's degree in{" "}
            <Link
              href="https://www.uio.no/studier/program/informatikk-sprakteknologi/"
              target="_blank"
              rel="noopener"
            >
              natural language processing and artificial intelligence
            </Link>{" "}
            at the same university.
          </Typography>
          <Typography variant="body1">
            I work as a web developer on the research service{" "}
            <Link
              href="https://nettskjema.no/?lang=en"
              target="_blank"
              rel="noopener"
            >
              Nettskjema.no
            </Link>
            , and as a teaching assistant in{" "}
            <Link
              href="https://www.uio.no/studier/emner/matnat/ifi/IN4120/index-eng.html"
              target="_blank"
              rel="noopener"
            >
              search technology
            </Link>
            .
          </Typography>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: 180,
              height: 180,
              mb: 2,
              position: "relative",
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: 3,
            }}
          >
            <Image
              src={ProfilePicture}
              alt="Picture of the author"
              fill
              style={{
                objectFit: "cover",
                borderRadius: "50%",
                objectPosition: "center 10%", // shifts image down inside the frame
              }}
              sizes="180px"
            />
          </Box>
          <Typography variant="caption" sx={{ mb: 2 }}>
            <i>All rights reserved</i>
          </Typography>
          <List>
            {linkPairs.map(([name, url, icon]) => (
              <ListItem key={url} disablePadding>
                <ListItemIcon sx={{ minWidth: 36 }}>{icon}</ListItemIcon>
                <Link
                  href={url}
                  target="_blank"
                  rel="noopener"
                  underline="hover"
                >
                  <ListItemText primary={name} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Paper>
  </Box>
);

export default IndexContent;
