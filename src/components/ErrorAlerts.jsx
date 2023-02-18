import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function ErrorAlerts(props) {
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
        <Alert severity="error">{props.error}</Alert>
      </Stack>
    </div>
  );
}
