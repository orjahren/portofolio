import sitemap from "@/src/app/sitemap";

import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
} from "@mui/material";

export async function generateMetadata(): Promise<{
  title: string;
  description: string;
}> {
  return {
    title: "Blog Overview",
    description: "Overview of blog posts.",
  };
}

const formatDate = (date: Date) => date.toISOString().split("T")[0]; // Format as YYYY-MM-DD

const getPostMetadata = async (slug: string) => {
  const mdx = await import(`./${slug}/page.mdx`);
  return mdx.metadata;
};

const BlogpostsOverview = async () => {
  // TODO: Wack navn
  const siteMap = await sitemap();

  const posts = await Promise.all(
    siteMap
      .filter((item) => item.url.includes("/blog/"))
      .map(async (post) => {
        const slug = post.url.split("/").pop() || "default";
        const metadata = await getPostMetadata(slug);

        return {
          title: metadata.title || "Untitled",
          date: new Date(metadata.date),
          keyword: slug,
          blurb: metadata.blurb,
          description: metadata.description,
          link: post.url,
        };
      })
  );

  if (!posts.length) {
    return (
      <Typography variant="body1" color="text.secondary">
        No blog posts available.
      </Typography>
    );
  }

  // Sort posts by date, newest first
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <Box>
      <Stack spacing={3}>
        {posts
          .filter((post) => post)
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
