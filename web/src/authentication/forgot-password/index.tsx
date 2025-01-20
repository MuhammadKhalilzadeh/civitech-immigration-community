import { Button, Typography } from "@mui/material";

import Textfield from "../../components/textfield";

import { Stack } from "@mui/material";

const ForgotPassword = () => {
  const centering = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Stack
      sx={{
        ...centering,
        minHeight: "100vh",
      }}
    >
      <Stack
        sx={{
          padding: 2,
          borderRadius: 2,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          minWidth: 300,
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "20px",
            marginY: 2,
          }}
        >
          Get verification a code
        </Typography>
        <Textfield label="Email" size="small" placeholder="Enter your email" />
        <Button variant="contained" color="primary" size="small" sx={{ mt: 2 }}>
          Get a code
        </Button>
      </Stack>
    </Stack>
  );
};

export default ForgotPassword;
