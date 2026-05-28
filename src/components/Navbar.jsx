import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

const pages = ['Home', 'Blog', 'Atividades', 'Contato'];

const MaterialUISwitch = styled(Switch)(() => ({
   width: 62,
   height: 34,
   padding: 7,

   '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',

      '&.Mui-checked': {
         color: '#fff',
         transform: 'translateX(22px)',

         '& .MuiSwitch-thumb:before': {
            backgroundImage:
               `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' height='20' width='20' viewBox='0 0 20 20'><path fill='%23fff' d='M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z'/></svg>")`,
         },

         '& + .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: '#8a4b24',
         },
      },
   },

   '& .MuiSwitch-thumb': {
      backgroundColor: '#ee6c2d',
      width: 32,
      height: 32,

      '&::before': {
         content: '""',
         position: 'absolute',
         width: '100%',
         height: '100%',
         left: 0,
         top: 0,
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'center',
         backgroundImage:
            `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' height='20' width='20' viewBox='0 0 20 20'><path fill='%23fff' d='M9.305 1.667V3.75h1.389V1.667zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982zm10.802 0L13.927 5.09l.982.982zm-5.4 1.522A4.872 4.872 0 005.138 10 4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.862 10 4.872 4.872 0 0010 5.139z'/></svg>")`,
      },
   },

   '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: '#d89a72',
      borderRadius: 20,
   },
}));

function Navbar() {
   const [anchorElNav, setAnchorElNav] = React.useState(null);
   const [darkMode, setDarkMode] = React.useState(true);

   React.useEffect(() => {
      document.body.classList.add('dark');
   }, []);

   const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
   };

   const handleCloseNavMenu = () => {
      setAnchorElNav(null);
   };

   const handleThemeChange = (event) => {
      const isDark = event.target.checked;
      setDarkMode(isDark);

      if (isDark) {
         document.body.classList.add('dark');
      } else {
         document.body.classList.remove('dark');
      }
   };

   return (
      <AppBar
         position="fixed"
         sx={{
            backgroundColor: darkMode ? '#8a4b24' : '#ee6c2d',
            color: '#fff',
            transition: 'all .3s ease',
            boxShadow: '0 6px 20px rgba(0,0,0,.15)',
         }}
      >
         <Container maxWidth="xl">
            <Toolbar disableGutters>
               <AdbIcon
                  sx={{
                     display: { xs: 'none', md: 'flex' },
                     mr: 1,
                  }}
               />

               <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="#"
                  sx={{
                     display: { xs: 'none', md: 'flex' },
                     fontWeight: 700,
                     letterSpacing: '.15rem',
                     color: 'inherit',
                     textDecoration: 'none',
                  }}
               >
                  IARLEMG
               </Typography>

               <Box
                  sx={{
                     flexGrow: 1,
                     display: { xs: 'flex', md: 'none' },
                  }}
               >
                  <IconButton
                     size="large"
                     aria-label="abrir menu"
                     aria-controls="menu-appbar"
                     aria-haspopup="true"
                     onClick={handleOpenNavMenu}
                     color="inherit"
                  >
                     <MenuIcon />
                  </IconButton>

                  <Menu
                     id="menu-appbar"
                     anchorEl={anchorElNav}
                     open={Boolean(anchorElNav)}
                     onClose={handleCloseNavMenu}
                     anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                     }}
                     transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                     }}
                  >
                     {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                           <Typography textAlign="center">
                              {page}
                           </Typography>
                        </MenuItem>
                     ))}
                  </Menu>
               </Box>

               <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="#"
                  sx={{
                     flexGrow: 1,
                     display: { xs: 'flex', md: 'none' },
                     fontWeight: 700,
                     color: 'inherit',
                     textDecoration: 'none',
                  }}
               >
                  IARLEMG
               </Typography>

               <Box
                  sx={{
                     flexGrow: 1,
                     display: { xs: 'none', md: 'flex' },
                     justifyContent: 'flex-end',
                     gap: 2,
                     mr: 3,

                  }}
                  >
         
                  <Stack
                     direction="row"
                     spacing={2}
                     sx={{
                        '& .MuiButton-root': {
                           color: '#fff',
                           fontWeight: 700,
                           fontSize: '1rem',
                           px: 2,
                           py: 1,
                           borderRadius: 2,
                           textTransform: 'none',

                           '&:hover': {
                              backgroundColor: darkMode ? '#6f3817' : '#d85a1f',
                           },
                        },
                     }}
                  >
                     <Button component={Link} to='/' variant='text' color='inherit'>
                        HOME
                     </Button>
                     <Button component={Link} to='/Blog' variant='text' color='inherit'>
                        BLOG
                     </Button>
                     <Button component={Link} to='/Contato'variant='text' color='inherit'>
                        CONTATO
                     </Button>
                     <Button component={Link} to='/Atividades' variant='text' color='inherit'>
                        ATIVIDADE
                     </Button>
                  </Stack>
               </Box>

               <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title={darkMode ? 'Modo Escuro' : 'Modo Claro'}>
                     <MaterialUISwitch
                        checked={darkMode}
                        onChange={handleThemeChange}
                     />
                  </Tooltip>
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   );
}

export default Navbar;