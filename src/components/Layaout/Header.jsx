import React, { useState } from 'react'
import {AppBar, Box, Drawer, IconButton, Toolbar, Typography} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import '../../styles/HeaderStyles.css';
import Logo from '../../assets/images/logo.svg';


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
              <img src={Logo} alt="logo" height={"70"} width="200" />
            </Typography>
          
              <ul className="mobile-navigation">
                <li>
                  <NavLink activeClassName="active" to='/'>Home</NavLink>
                </li>
                <li>
                  <NavLink to='/menu'>Menu</NavLink>
                </li>
                <li>
                  <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                  <NavLink to='/contact'>Contact</NavLink>
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
               <img src={Logo} alt="logo" height={"70"} width="250" />
            </Typography>
            <Box sx={{display:{xs: 'none', sm:'block'}}}>
              <ul className='navigation-menu'>
                <li>
                  <NavLink activeClassName="active" to='/'>Home</NavLink>
                </li>
                <li>
                  <NavLink to='/menu'>Menu</NavLink>
                </li>
                <li>
                  <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                  <NavLink to='/contact'>Contact</NavLink>
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

        <Box >
          <Toolbar/>
        </Box>
        
      </Box>
    </>
  )
}

export default Header