import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };

  const menuItems = [
    <Button key="hours" color="inherit" href="#hours" onClick={handleMobileMenuClose}>Hours</Button>,
    <Button key="reservations" color="inherit" href="#reservations" onClick={handleMobileMenuClose}>Reservations</Button>,
    <Button key="menus" color="inherit" href="#menus" onClick={handleMobileMenuClose}>Menus</Button>,
    <Button key="about" color="inherit" href="#about" onClick={handleMobileMenuClose}>About</Button>,
    <Button key="contact" color="inherit" href="#contact" onClick={handleMobileMenuClose}>Contact</Button>,
  ];

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Restaurant
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileMenuOpen}
              onClose={handleMobileMenuClose}
            >
              <List>
                {menuItems.map((item, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <div>
            {menuItems.map((item) => item)}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
