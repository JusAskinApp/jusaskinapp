import * as React from "react";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Stack from "@mui/material/Stack";

export default function SuccessAlert() {
  const [open, setOpen] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!open) {
    return null;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
  <Stack sx={{ width: "50%" }} spacing={2}>
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      "You're now subscribed to our email list. Expect great things!"
    </Alert>
  </Stack>
</div>
  );
}
