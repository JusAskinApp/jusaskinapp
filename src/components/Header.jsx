import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import {
  ThemeProvider,
  createTheme,
  TextField,
  responsiveFontSizes,
} from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import Stories from "./Stories";

const theme = createTheme();
theme.overrides = {
  MuiOutlinedInput: {
    root: {
      borderRadius: "30px",
    },
  },
};
const responsiveTheme = responsiveFontSizes(theme);
export default function AutoGrid() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} textAlign="right">
          <Grid xs={10}></Grid>
          <Grid xs={1}>
            <IconButton>
              <SearchOutlinedIcon />
            </IconButton>
          </Grid>
          <Grid xs={1}>
            <IconButton>
              <EmailOutlinedIcon />
            </IconButton>
          </Grid>
          {/* will render a story component */}

          <Stories />
          {/* will render a story component */}

          <Grid item xs={11}>
            <ThemeProvider theme={responsiveTheme}>
              <TextField
                style={{ width: "100%", marginTop: "20px" }}
                label="What's on your mind"
                id="outlined-size-small"
                variant="outlined"
                size="small"
              />
            </ThemeProvider>
          </Grid>
          <Grid item xs={1}>
            <IconButton>
              <AddIcon
                fontSize="large"
                fontWeight="light"
                style={{ color: "#8ca1a6", marginTop: "11px" }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
