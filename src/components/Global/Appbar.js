'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import classes from './bar.module.css'
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

import Image from 'next/image';

import mlsa from '../../../public/Assets/Photos/mlsa-logo.png'
const pages = ['Home', 'Events', 'About Us', 'Contact'];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor:'#01101F'}}>
      <Container className={classes['container']} maxWidth="xl" sx={{backgroundColor:'#021529'}}>
        <Toolbar disableGutters className={classes['bar']} sx={{display: 'flex', justifyContent:'space-between', paddingLeft:'2rem', paddingRight:'3rem'}}>
    <Image

          className={classes['img']}
            src={mlsa}
            
           
            />

      
  
        
          <Box sx={{ display:'flex' , flexDirection:'row' , justifyContent:'space-between' }}       >
            {pages.map((page) => (
              <Button
              className={classes['button']}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#e1effd', marginLeft:"1rem" , display: 'block', fontSize:'1.5rem', fontWeight:'500' }}
              >
                {page}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;