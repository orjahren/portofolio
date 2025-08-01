"use client";

import style from "./header.module.scss";

import {
  Box,
  Typography,
  Link,
  Divider,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const navLinks: ReadonlyArray<{ href: string; label: string }> = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box component="header" className={style.header} py={3} px={2}>
      <Typography variant="h4" align="center" gutterBottom>
        Oliver Jahren's personal website
      </Typography>
      <Box
        sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center" }}
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
          divider={<Divider orientation="vertical" flexItem />}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              underline="hover"
              color="inherit"
            >
              {link.label}
            </Link>
          ))}
        </Stack>
      </Box>
      <Box
        sx={{ display: { xs: "flex", md: "none" }, justifyContent: "center" }}
      >
        <IconButton
          aria-label="menu"
          onClick={() => setDrawerOpen(true)}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="top"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.href} onClick={() => setDrawerOpen(false)}>
                <Link href={link.href} underline="hover" color="inherit">
                  <ListItemText primary={link.label} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
