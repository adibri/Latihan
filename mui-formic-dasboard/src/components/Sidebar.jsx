import { Box, Grid } from '@mui/material';
import React from 'react';
import { Item } from '../styled/Item';
import TitleDaftar from '../pages/TitleDaftar';

const Sidebar = ({ childern }) => {
  return (
    <Box bgcolor="gray" flex={1} sx={{ padding: '10px 0' }}>
      <Grid item xs={3}>
        <Item color="gray">
          <TitleDaftar />
        </Item>
      </Grid>
    </Box>
  );
};

export default Sidebar;
