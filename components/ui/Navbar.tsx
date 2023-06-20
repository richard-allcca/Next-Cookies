import NextLink from 'next/link';

import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import MenuOutlineIcon from '@mui/icons-material/MenuOutlined';


export const Navbar = () => {
  return (
    <AppBar position='sticky' elevation={0}>
      <Toolbar>

        <IconButton
          size='large'
          edge='start'
        >
          <MenuOutlineIcon />
        </IconButton>

        <NextLink legacyBehavior href='/' passHref>
          <Link color="#fff" underline='none'   >
            <Typography variant="h6" >CookieMaster</Typography>
          </Link>
        </NextLink>

        <div style={{ flex: 1 }} />

        <NextLink legacyBehavior href='/theme-changer' passHref>
          <Link color="#fff" underline='none' >
            <Typography variant='h6' color="white">Cambiar tema</Typography>
          </Link>
        </NextLink>

      </Toolbar>
    </AppBar>
  );
};
