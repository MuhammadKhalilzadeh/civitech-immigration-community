import { Button } from "@mui/material";

import Textfield from "../../components/textfield";

import { Stack, Typography } from "@mui/material";

const SetNewPassword = () => {
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
          Set a new password
        </Typography>
        <Textfield
          label="Code"
          size="small"
          placeholder="Enter verification code"
        />
        <Textfield
          label="New password"
          size="small"
          placeholder="Set a new password"
        />
        <Textfield
          label="Repeat password"
          size="small"
          placeholder="Repeat your password"
        />
        <Button variant="contained" color="primary" size="small" sx={{ mt: 2 }}>
          continue
        </Button>
      </Stack>
    </Stack>
  );
};

export default SetNewPassword;
