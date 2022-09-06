import React from 'react';
import { Box, Grid } from '@mui/material';
import { Item } from '../styled/Item';
import FormDaftar from '../pages/FormDaftar';

const Rightbar = ({ childern }) => {
  return (
    <Box flex={3} sx={{ padding: '10px 0' }}>
      <Grid item xs={3}>
        <Item>
          <FormDaftar />
        </Item>
      </Grid>
    </Box>
  );
};

export default Rightbar;
