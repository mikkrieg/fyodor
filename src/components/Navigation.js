import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Logo from './../img/Logo.JPG';
import './styles/styles.css';

const Navigation = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    return (
      <AppBar position='static' color='inherit'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{ 
                mr: 2, 
                display: { xs: 'none', md: 'flex' }
              }}
            >
              <Link to='/'>
                <img src={Logo} className='logo'/>
              </Link>
            </Typography>
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              <img src={Logo} className='logo'/>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon sx={{color: '#6297AF', fontSize: '1.1em'}}/>
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                  color: '#000'
                }}
              >
                <Link to='/' className='links'>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign='center' className='menu-items' sx={{ color: '#6297AF', fontWeight: 'bold'}}>Home</Typography>
                  </MenuItem>
                </Link>
                <Link to='/about' className='links'>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign='center' className='menu-items' sx={{ color: '#6297AF', fontWeight: 'bold'}}>About</Typography>
                  </MenuItem>
                </Link>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign='center' className='menu-items' sx={{ color: '#6297AF', fontWeight: 'bold'}}>Contact</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              <Link to='/' className='links'>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: '#6297AF', 
                    display: 'block', 
                    fontFamily: 'Sansita !important',
                    fontSize: {md: '1.5em', lg: '1.4em', xl: '1.6em' },
                    marginRight: '15%',
                  }}
                >
                  Home
                </Button>
              </Link>
              <Link to='/about' className='links'>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: '#6297AF', 
                    display: 'block', 
                    fontFamily: 'Sansita !important',
                    fontSize: {md: '1.5em', lg: '1.4em', xl: '1.6em' },
                    marginRight: '15%',
                  }}
                >
                  About
                </Button>
              </Link>
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  color: '#6297AF', 
                  display: 'block', 
                  fontFamily: 'Sansita !important',
                  fontSize: {md: '1.5em', lg: '1.4em', xl: '1.6em' },
                  marginRight: {md: '25%', xl:'-5%' }
                }}
              >
                Contact
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  };

export default Navigation;