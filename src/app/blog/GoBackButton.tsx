"use client";

import { useRouter } from "next/navigation";
import { Button, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const GoBackButton = () => {
  const router = useRouter();
  return (
    <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => router.back()}
        size="small"
        startIcon={<ArrowBackIcon />}
        sx={{ textTransform: "none", fontWeight: 500 }}
      >
        Go back
      </Button>
    </Box>
  );
};

export default GoBackButton;
