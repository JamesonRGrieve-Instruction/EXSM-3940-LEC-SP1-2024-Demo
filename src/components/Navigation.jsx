import React from 'react';
// Don't mix this up with the MUI Link unless you inject the NextJS Link functionality therein via theming, etc.
import { Box, Link, List, ListItem } from '@mui/material';
const Navigation = () => {
  return (
    <Box component='nav'>
      <List
        sx={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center',
          listStyle: 'none',
          padding: 0,
        }}
      >
        <ListItem sx={{ justifyContent: 'center' }}>
          <Link href='/'>Home</Link>
        </ListItem>
        <ListItem sx={{ justifyContent: 'center' }}>
          <Link href='/gallery'>Gallery</Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default Navigation;
