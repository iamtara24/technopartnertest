import React from 'react';
import { Stack, Box, Typography, IconButton } from '@mui/material';
import HomeIconActive from '../../assets/img/home1.png';
import HomeIcon from '../../assets/img/home2.png';
import MenuIconActive from '../../assets/img/menu1.png';
import MenuIcon from '../../assets/img/menu2.png';
import { useLocation, useNavigate } from 'react-router-dom';

const MenuBar = () => {
 const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <Stack direction='row' justifyContent='space-around' sx={{ position: 'fixed', bottom: '0', width: '100%', padding: '1rem', background: '#fafafa' }}>
      <Box sx={{textAlign: 'center'}}>
        <IconButton onClick={() => handleNavigation('/home')}>
          <img src={location.pathname === '/home' ? HomeIconActive : HomeIcon} alt="Home Icon" style={{ width: '40%' }} />
        </IconButton>
        <Typography sx={{ fontSize: '11px' }}>Home</Typography>
      </Box>
      <Box sx={{textAlign: 'center'}}>
        <IconButton onClick={() => handleNavigation('/menu')}>
          <img src={location.pathname === '/menu' ? MenuIconActive : MenuIcon} alt="Menu Icon" style={{ width: '40%' }} />
        </IconButton>
        <Typography sx={{ fontSize: '11px' }}>Menu</Typography>
      </Box>
    </Stack>
  )
}

export default MenuBar