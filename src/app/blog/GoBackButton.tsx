"use client";

import Link from "next/link";
import { Button, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const GoBackButton = () => {
  return (
    <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
      <Button
        variant="outlined"
        color="primary"
        component={Link}
        href="/blog"
        size="small"
        startIcon={<ArrowBackIcon />}
        sx={{ textTransform: "none", fontWeight: 500 }}
        aria-label="Go back to blog overview"
      >
        Go back
      </Button>
    </Box>
  );
};

export default GoBackButton;
