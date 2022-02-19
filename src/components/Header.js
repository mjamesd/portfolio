import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Avatar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['About', 'Portfolio', 'Contact', 'Resumé'];
const page_urls = ['/about', '/portfolio', '/contact', '/resume'];

const Header = () => {
    const [activePage, setActivePage] = useState('');
    const handlePageChange = (page) => setActivePage(page);

    const [anchorElNav, setAnchorElNav] = useState(null);
    const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);

    return (
        <React.Fragment>
            <AppBar position="fixed">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* ~=~=~=~=~=~=~=~= DESKTOP VIEW ~=~=~=~=~=~=~=~= */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >

                            <Link key="home" to="/">
                                <Avatar alt={`Stylized "D" character logo`} src="/img/d_logo.png" />
                            </Link>
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
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
                                {pages.map((page, i) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">
                                            <Link to={page_urls[i]} style={{ textDecorationLine: 'none' }}>{page}</Link>
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        {/* ~=~=~=~=~=~=~=~= MOBILE VIEW ~=~=~=~=~=~=~=~= */}
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
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page, i) => (
                                <Link key={page} to={page_urls[i]} style={{ textDecorationLine: 'none' }}>
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                </Link>
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