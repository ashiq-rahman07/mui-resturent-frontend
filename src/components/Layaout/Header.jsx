import React, { useState } from 'react'
import {AppBar, Box, Drawer, IconButton, Toolbar, Typography} from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import '../../styles/HeaderStyles.css';
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  //handle menu click 
  const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen)
  }
  //menu drawer
  const drawer = ( 
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
        <Typography component='div' variant='h6' color={"goldenrod"} sx={{flexGrow: 1, my:2}} >
              <FastfoodIcon/>
                My Resturent
            </Typography>
          
              <ul className="mobile-navigation">
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/menu'>Menu</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>
           
    </Box>
  )
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{bgcolor:"black"}}>
          <Toolbar>
            <IconButton 
            color='inherit' 
            aria-level="open drawer" 
            edge="start"
            sx={{mr: 2, display:{sm: "none"}}}
            onClick={handleDrawerToggle}
            >
                <MenuIcon/>
            </IconButton>
            <Typography component='div' variant='h6' color={"goldenrod"} sx={{flexGrow: 1}} >
              <FastfoodIcon/>
                My Resturent
            </Typography>
            <Box sx={{display:{xs: 'none', sm:'block'}}}>
              <ul className='navigation-menu'>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/menu'>Menu</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
          
        </AppBar>
        <Box>
          <Drawer 
          component="nav" 
          open={mobileOpen} 
          onClose={handleDrawerToggle}
          sx={{display:{xs: "block", sm:"none"},"& .MuiDrawer-paper":{
            boxSizing: 'border-box',
            width:"240px"
          }}}
          >
            {drawer}
          </Drawer>
        </Box>

        <Box sx={{py:1}}>
          <Toolbar/>
        </Box>
        
      </Box>
    </>
  )
}

export default Header