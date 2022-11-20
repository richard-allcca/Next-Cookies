import NextLink from 'next/link'

import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material'
import MenuOutlineIcon from '@mui/icons-material/MenuOutlined'


export const Navbar = () => {
   return (
      <AppBar position='sticky' elevation={ 0 }>
         <Toolbar>

            <IconButton
               size='large'
               edge='start'
            >
               <MenuOutlineIcon />
            </IconButton>


            <NextLink href='/' >
               <Link href='/' >
                  <Typography>CookieMaster</Typography>
               </Link>
            </NextLink>

            <NextLink href='/theme-changer' passHref>
               <Link href='' >
                  <Typography variant='h6' color="white">Cambiar tema</Typography>
               </Link>
            </NextLink>

         </Toolbar>
      </AppBar>
   )
}
