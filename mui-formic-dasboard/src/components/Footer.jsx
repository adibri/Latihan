import { Box, Stack } from '@mui/material';
import React from 'react';
import { Item } from '../styled/Item';

const Footer = () => {
  return (
    <Box bgcolor="#ffd25a" flex={1} bottom={0}>
      <Stack direction="row" justifyContent="space-between">
        <Box sx={{ padding: '1em' }} flex={1}>
          TITLE FOOTER
        </Box>
        <Box sx={{ padding: '1em' }} flex={3}>
          <Item color="#ffd25a">
            Another List item goes here ... Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Officiis amet accusantium ut porro
            veniam quisquam iusto aut laboriosam libero quod ea architecto, non
            illo aliquam laudantium tenetur atque excepturi officia!
          </Item>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
