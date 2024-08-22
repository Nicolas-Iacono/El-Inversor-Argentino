import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  CssBaseline,
  useScrollTrigger,
  Slide,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../../assets/logoInversor.png";
import hamburguer from "../../assets/icon-hamburger.svg";
import { useAuth } from "../../context/GlobalAuth";
import { useGlobalTheme } from '../../context/GlobalTheme';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import "../styles/theme.css";
import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
export const Header = (props) => {
  const navigate = useNavigate();
  const { logout, isLogged, isAdmin } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [mobile, setMobile] = useState(window.innerWidth < 900)
  const {theme, darkMode ,toggleTheme} = useGlobalTheme()


  const handleResize = () => {
    setMobile(window.innerWidth < 900);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },[])

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();




    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
  };

  return (
    <>
    {
      mobile ? (
    <>
    
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            
          }}
        >
          <Toolbar
        className="navbar"

            sx={{
           
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              padding: "0 20px",
            }}
          >
            <img src={Logo} alt="logo" width={"100px"} style={{filter: theme === 'dark' ? "invert(1)" : "invert(0)" }} />
            <Tooltip title="Account settings"> 
            <IconButton 
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}>
              <MenuIcon sx={{filter: theme === 'dark' ? "invert(1)" : "invert(0)"}} />
            
            </IconButton>

            </Tooltip>
           
          
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                height: "50px",
                width: "40%",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
            >
              {isLogged ? (
                isAdmin ? (
                  <Menu anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                      <MenuItem onClick={() => navigate('/')}>
                      <Link to="/" className='text' style={{  textDecoration: "none", fontSize: "20px" }}>Home</Link>
                      </MenuItem>
                    <MenuItem onClick={() => navigate('/blog')}>
                    <Link to="/blog" className='text' style={{ textDecoration: "none", fontSize: "20px" }}>Blog</Link>
                    </MenuItem>
                    <MenuItem onClick={() => navigate('/contact')}>
                    <Link to="/contact" className='text' style={{ textDecoration: "none", fontSize: "20px" }}>Contact</Link>
                    </MenuItem>
                    <MenuItem onClick={logout}>
                    <h7>Sign Out</h7>
                    </MenuItem>
                    <MenuItem onClick={toggleTheme}>
                    <DarkModeIcon/> <h7>Change Theme</h7>
                    </MenuItem>
                    
                  </Menu>
                ) : (
                  <Menu anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                      <MenuItem onClick={() => navigate('/')}>
                      <Link to="/" className='text' style={{  textDecoration: "none", fontSize: "20px" }}>Home</Link>
                      </MenuItem>
                    <MenuItem onClick={() => navigate('/favourites')}>
                    <Link to="#" className='text' style={{ textDecoration: "none", fontSize: "20px" }}>Favourites</Link>
                    </MenuItem>
                    <MenuItem onClick={() => navigate('/contact')}>
                    <Link to="#" className='text' style={{ textDecoration: "none", fontSize: "20px" }}>Contact</Link>
                    </MenuItem>
                    <MenuItem onClick={logout}>
                    <h7>Sign Out</h7>
                    </MenuItem>
                    <MenuItem onClick={toggleTheme}>
                    <DarkModeIcon/> <h7>Change Theme</h7>
                    </MenuItem>
                    
                  </Menu>
                 
                )
              ) : (
                <Menu anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&::before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                    <MenuItem onClick={() => navigate('/')}>
                    <Link  className='text' style={{  textDecoration: "none", fontSize: "20px" }}>Home</Link>
                    </MenuItem>
                  <MenuItem onClick={() => navigate('/contact')}>
                  <Link to="#" className='text' style={{ textDecoration: "none", fontSize: "20px" }}>Contact</Link>
                  </MenuItem>
                  <MenuItem onClick={() => navigate('/auth')}>
                  <h2>Sign in</h2>
                  </MenuItem>
                  <MenuItem onClick={toggleTheme}>
                  <DarkModeIcon/> <h3>Change Theme</h3>
                  </MenuItem>
                  
                </Menu>
                
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
      ):( <>
    
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              
            }}
          >
            <Toolbar
          className="navbar"
  
              sx={{
             
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                padding: "0 20px",
              }}
            >
              <img src={Logo} alt="logo" style={{filter: theme === 'dark' ? "invert(1)" : "invert(0)" }} />
  
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  height: "50px",
                  width: "40%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                {isLogged ? (
                  isAdmin ? (
                    <>
                      <Link to="/" className='text' style={{  textDecoration: "none", fontSize: "20px" }}>Home</Link>
                      <Link to="/blog" className='text' style={{ textDecoration: "none", fontSize: "20px" }}>Blog</Link>
                      <Link to="/contact" className='text' style={{ textDecoration: "none", fontSize: "20px" }}>Contact</Link>
                      <Button
                      className="button1"
                        sx={{
                          height: "40px",
                          width: "20%",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "12px",
                          backgroundColor: 'var(--button)',
                          color: 'var(--fontButton)',
                          '&:hover': {
                            backgroundColor: '#1565c0',
                          },
                        }}
                        onClick={logout}
                      >
                        Cerrar sesión
                      </Button>
                      <IconButton onClick={toggleTheme}>
                        <DarkModeIcon/>
                    </IconButton>
                    </>
                  ) : (
                    <>
                      <Link to="/" className='text' style={{textDecoration: "none", fontSize: "20px" }}>Home</Link>
                      <Link to="/favourites" className='text' style={{  textDecoration: "none", fontSize: "20px" }}>Favourites</Link>
                      <Link to="/contact" className='text' style={{  textDecoration: "none", fontSize: "20px" }}>Contact</Link>
                      <Button
                        className="button1"
  
                        sx={{
                          height: "40px",
                          width: "20%",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "12px",
                          backgroundColor: 'var(--button)',
                          color: 'var(--fontButton)',
                          '&:hover': {
                            backgroundColor: '#1565c0',
                          },
                        }}
                        onClick={logout}
                      >
                        Cerrar sesión
                      </Button>
                      <IconButton onClick={toggleTheme}>
                        <DarkModeIcon/>
                    </IconButton>
                    </>
                  )
                ) : (
                  <>
                    <Link to="/" className='text' style={{  textDecoration: "none", fontSize: "20px" }} >Home</Link>
                    <Link to="/contact" className='text' style={{ textDecoration: "none", fontSize: "20px" }}>Contact</Link>
                    <Button
                      className="button1"
                      sx={{
                        height: "40px",
                        width: "20%",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "12px",
                        backgroundColor: 'var(--button)',
                        color: 'var(--fontButton)',
                        '&:hover': {
                          backgroundColor: '#1565c0',
                        },
                      }}
                      onClick={() => navigate('/auth')}
                    >
                      Iniciar Sesión
                    </Button>
  
                    <IconButton onClick={toggleTheme}>
                        <DarkModeIcon/>
                    </IconButton>
                  </>
                )}
              </Box>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
      </>)
    }
      </>

  );
};

export default Header;
