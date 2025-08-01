import posts from "@/src/data/blog/posts";

import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
} from "@mui/material";

export const formatDate = (date: Date) => date.toISOString().split("T")[0]; // Format as YYYY-MM-DD

const BlogpostsOverview = () => {
  return (
    <Box>
      <Stack spacing={3}>
        {posts
          .filter((post) => !post.hidden)
          .map((post) => (
            <Card key={post.keyword} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  {post.title}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  display="block"
                  gutterBottom
                >
                  {formatDate(post.date)}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {post.blurb}
                </Typography>
                <Button
                  href={post.link}
                  rel="noopener"
                  variant="contained"
                  sx={{ mt: 2 }}
                >
                  Read more
                </Button>
              </CardContent>
            </Card>
          ))}
      </Stack>
    </Box>
  );
};

const BlogPage = () => {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Blog overview
      </Typography>
      <Typography variant="body1" gutterBottom>
        Explore my blog posts below. Focus on culture and philosophy. A mix of
        Norwegian and English content.
      </Typography>
      <BlogpostsOverview />
    </Box>
  );
};

export default BlogPage;
