import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AppBar, Avatar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import WebTwoToneIcon from '@mui/icons-material/WebTwoTone';
import PhonelinkRingTwoToneIcon from '@mui/icons-material/PhonelinkRingTwoTone';
import BusinessCenterTwoToneIcon from '@mui/icons-material/BusinessCenterTwoTone';

const pages = [`About Me`, `Portfolio`, `Contact`, `Resumé`];
const page_urls = ['/about', '/portfolio', '/contact', '/resume'];
const page_icons = [<AccountCircleTwoToneIcon />, <WebTwoToneIcon />, <PhonelinkRingTwoToneIcon />, <BusinessCenterTwoToneIcon />];

const linkStyle = {
    textDecorationLine: 'none',
};

const linkTextStyle = {
    fontFamily: 'Special Elite',
    fontSize: '1.2rem',
    textTransform: 'none',
    padding: '0px 15px',
}

const AppBarStyle = {
    backgroundColor: '#724472',
};


const Header = ({ activePage, handlePageChange }) => {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);

    return (
        <React.Fragment>
            {console.log('active page: ', activePage)}
            <AppBar position="fixed" style={AppBarStyle}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* ~=~=~=~=~=~=~=~= LOGO: DESKTOP VIEW ~=~=~=~=~=~=~=~= */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            <Link
                                key="home"
                                to="/"
                                onClick={() => handlePageChange('About')}
                            >
                                <Avatar alt={`Stylized "D" character logo`} src="/img/d_logo.png" />
                            </Link>
                        </Typography>
                        {/* ~=~=~=~=~=~=~=~= LINKS: MOBILE VIEW ~=~=~=~=~=~=~=~= */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="app menu"
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
                                }}
                            >
                                {pages.map((page, i) => {
                                    return (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">
                                            <NavLink
                                                to={page_urls[i]}
                                                style={linkStyle}
                                                onClick={() => handlePageChange(page)}
                                            >{page}</NavLink>
                                        </Typography>
                                    </MenuItem>
                                )})}
                            </Menu>
                        </Box>
                        {/* ~=~=~=~=~=~=~=~= LOGO: MOBILE VIEW ~=~=~=~=~=~=~=~= */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            <Link key="home-mobile" to="/">
                                <Avatar alt={`Stylized "D" character logo`} src="/img/d_logo.png" />
                            </Link>
                        </Typography>
                        {/* ~=~=~=~=~=~=~=~= LINKS: DESKTOP VIEW ~=~=~=~=~=~=~=~= */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page, i) => (
                                <NavLink
                                    key={page}
                                    className='appbarmenulink'
                                    to={page_urls[i]}
                                    style={linkStyle}
                                    onClick={() => handlePageChange(page)}
                                >
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        style={linkTextStyle}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page_icons[i]} {page}
                                    </Button>
                                </NavLink>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Toolbar />
        </React.Fragment>
    );
};
export default Header;