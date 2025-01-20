import { Button, Stack, Typography } from "@mui/material";
import Textfield from "../../components/textfield";

const Signup = () => {
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
          Create your admin account
        </Typography>
        <Textfield label="Name" size="small" placeholder="Enter your name" />
        <Textfield
          label="Surname"
          size="small"
          placeholder="Enter your surname"
        />
        <Textfield label="Email" size="small" placeholder="Enter your email" />
        <Textfield label="Phone" size="small" placeholder="Enter your phone" />
        <Textfield label="Password" size="small" placeholder="Set a password" />
        <Button variant="contained" color="primary" size="small" sx={{ mt: 2 }}>
          Signup
        </Button>
        <Button
          variant="text"
          color="primary"
          size="small"
          sx={{ textTransform: "initial" }}
        >
          I already have an account
        </Button>
      </Stack>
    </Stack>
  );
};

export default Signup;
