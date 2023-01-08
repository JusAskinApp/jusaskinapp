import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#1e1e',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
   <div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid xs>
          <Item>xs</Item>
        </Grid>
      </Grid>
    </Box>
   </div>

  );
}