import { Stack, TextField, Typography } from "@mui/material";

interface TextfieldProps {
  label: string;
  placeholder: string;
  size: "small" | "medium";
}

const Textfield = ({ label, placeholder, size }: TextfieldProps) => {
  return (
    <Stack sx={{ gap: 1 }}>
      <Typography fontSize={13}>{label}</Typography>
      <TextField
        size={size}
        placeholder={placeholder}
        sx={{ fontSize: "13px" }}
      />
    </Stack>
  );
};

export default Textfield;
