"use client";

import posts from "@/src/data/blog/posts";
import { use } from "react";
import { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, IconButton, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const formatDate = (date: Date) => date.toISOString().split("T")[0]; // Format as YYYY-MM-DD

const postKeywordIsValid = (keyword: string) => {
  const validKeywords = posts.map((project) => project.keyword);
  return validKeywords.includes(keyword);
};

const PostNotFound = () => (
  <div>
    <h1>Blog post Not Found</h1>
    <p>The blog post you are looking for does not exist.</p>
    <p>
      Please check the URL or return to the <a href="/blog">blog overview</a>.
    </p>
  </div>
);

export default function DynamicPostPage({
  params,
}: {
  params: Promise<{ postKeyword: string }>;
}) {
  const { postKeyword } = use(params);
  const router = useRouter();

  console.log("Post keyword:", postKeyword);

  // TODO: Nødvendig å validere her? Vil uansett ikke finne noe under
  if (!postKeywordIsValid(postKeyword)) {
    return <PostNotFound />;
  }

  const post = posts.find((post) => post.keyword === postKeyword);
  console.log("Post found:", post);

  if (!post) {
    return <PostNotFound />;
  }

  const [PostContent, setPostContent] = useState<React.ComponentType | null>(
    null
  );

  // TODO: Det må være en bedre måte å gjøre dette på
  useEffect(() => {
    let isMounted = true;
    import(`@/src/data/blog/content/${post.fileName}`).then((mod) => {
      if (isMounted) setPostContent(() => mod.default);
    });
    return () => {
      isMounted = false;
    };
  }, [postKeyword]);

  if (!PostContent) return <div>Loading...</div>;

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={2}>
        <IconButton
          aria-label="Go back"
          onClick={() => router.push("/blog")}
          sx={{ mr: 1 }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5" component="h2" sx={{ margin: 0 }}>
          {post.title}
        </Typography>
      </Box>
      <Typography
        variant="caption"
        color="text.secondary"
        display="block"
        gutterBottom
      >
        {formatDate(post.date)}
      </Typography>
      <PostContent />
    </Box>
  );
}
