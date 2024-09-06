import { Link } from 'react-router-dom';

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
import MenuItem from '@mui/material/MenuItem';
import CodeIcon from '@mui/icons-material/Code';
import CodeOffIcon from '@mui/icons-material/CodeOff';

import { appBar, logoTypoDesk, codeIconDesk, hireMeLinkDesk, codeOffIconDesk } from './NavBar.styles';
import { useNavContext } from '../context/NavContext';
import { FC } from 'react';

// We always use "React.Dispatch<React.SetStateAction<string>>" when using the 'useState' hook when used with a 'string' initial value.
interface Props {
    setNavState: React.Dispatch<React.SetStateAction<string>>;
}

// In Ts, to define an Array of only 'strings', we use :string[]
const pages: string[] = ['work', 'skills', 'projects'];

export const NavBar: FC = () => {
    const { setNavState } = useNavContext();

    // function to identify page URL path and set it to 'useState' hook for Nav Tab
    const handleNavClick = ({ target }: any) => {
        const hrefValue = target.attributes.href.value;
        setNavState(hrefValue);
        console.log(hrefValue);
    }

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={appBar}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* MOBILE */}
                    {/* Burguer Nav Menu Mobile */}
                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
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
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <Link style={{ textDecoration: "none", color: "#000", fontFamily: 'Pangolin', fontSize: '18px', textTransform: 'uppercase' }} className="nav-link" to={`/${page}`} onClick={handleNavClick}>{page}</Link>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Hire Me Logo Mobile */}
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 0,
                            position: 'relative',
                            margin: 'auto',
                        }}
                    >

                        <CodeIcon sx={codeIconDesk} />
                        <Link to="/" onClick={handleNavClick} style={hireMeLinkDesk}>HIRE ME</Link>
                        <CodeOffIcon sx={codeOffIconDesk} />
                    </Typography>

                    {/* DESKTOP */}
                    {/* Hire Me Logo - Desktop */}
                    <Typography variant="h6" noWrap sx={logoTypoDesk}>
                        <CodeIcon sx={codeIconDesk} />
                        <Link to="/" onClick={handleNavClick} style={hireMeLinkDesk}>HIRE ME</Link>
                        <CodeOffIcon sx={codeOffIconDesk} />
                    </Typography>

                    {/* Nav Links - Desktop */}
                    <Box sx={{ marginTop: '2px', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleNavClick}
                                sx={{ my: 2, color: 'white', display: 'block', margin: '0px 20px', fontFamily: 'Pangolin', fontSize: '16px' }}
                            >
                                <Link style={{ textDecoration: "none", color: "white" }} className="nav-link" to={`/${page}`}>
                                    {page}
                                </Link>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
