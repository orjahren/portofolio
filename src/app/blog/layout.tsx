import { Box, Container, Typography } from "@mui/material";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      bgcolor="#fafafa"
    >
      <Box component="header" width="100%" textAlign="center" py={4}>
        <Typography variant="h3" component="h1">
          Blog
        </Typography>
      </Box>
      <Container
        component="main"
        maxWidth="md"
        sx={{
          flex: 1,
          bgcolor: "#fff",
          borderRadius: 2,
          boxShadow: 1,
          py: 4,
          px: { xs: 2, md: 4 },
          my: 2,
        }}
      >
        {children}
      </Container>
      <Box
        component="footer"
        width="100%"
        textAlign="center"
        py={2}
        color="#888"
      >
        <Typography variant="body2">
          © 2025 Oliver Jahren. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default BlogLayout;
