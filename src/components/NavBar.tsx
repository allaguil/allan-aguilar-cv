import { Link } from 'react-router-dom';

// export const NavBar = () => {
//   return (
//     <nav>
//         <Link to="/">CV</Link>
//         <Link to="/work">WORK EXPERIENCE</Link>
//         <Link to="/skills">SKILLS</Link>
//         <Link to="/projects">PROJECTS</Link>
//     </nav>
//   )
// }


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CodeIcon from '@mui/icons-material/Code';
import CodeOffIcon from '@mui/icons-material/CodeOff';

// We always use "React.Dispatch<React.SetStateAction<string>>" when using the 'useState' hook when used with a 'string' initial value.
interface Props {
    setNavState: React.Dispatch<React.SetStateAction<string>>;
}

// In Ts, to define an Array of only 'strings', we use :string[]
const pages:string[] = ['work', 'skills', 'projects'];

export const NavBar:React.FC<Props> = ({setNavState}) => {

    // function to identify page URL path and set it to 'useState' hook for Nav Tab
    const handleNavClick = ({target}:any) => {
        const hrefValue = target.attributes.href.value;
        setNavState(hrefValue);
        console.log(hrefValue)
    }

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
   
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (

        <AppBar position="static" style={{backgroundColor: "#000", boxShadow: "0 0 8px 0 rgb(12 54 107)"}}>

            <Container maxWidth="xl">

                <Toolbar disableGutters>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Pangolin',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: '#F5E71F',
                            textDecoration: 'none',
                        }}
                    >
                        <CodeIcon sx={{ color:'white', display: { xs: 'flex', md: 'flex' }, mr: .5, mt: .5 }} />
                        HIRE ME
                    <CodeOffIcon sx={{ color:'white', display: { xs: 'flex', md: 'flex' }, mt: .5 }} />
                    </Typography>

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
                                        <Link style={{textDecoration:"none", color:"#000", fontFamily:'Pangolin', fontSize:'18px', textTransform:'uppercase'}} className="nav-link" to={`/${page}`} onClick={handleNavClick}>
                                            {page}
                                        </Link>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2, //margin-right
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 0,
                            position: 'relative',
                            margin: 'auto',
                            fontFamily: 'Pangolin',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: '#F5E71F',
                            textDecoration: 'none',
                        }}
                    >
                    <CodeIcon sx={{ color:'white', display: { xs: 'flex', md: 'none' }, mr: .5, mt: .5 }} />
                        HIRE ME
                    <CodeOffIcon sx={{ color:'white', display: { xs: 'flex', md: 'none' }, mt: .5 }} />
                    </Typography>
                    <Box sx={{ marginTop:'2px', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleNavClick}
                                // onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block', margin: '0px 20px', fontFamily: 'Pangolin', fontSize: '16px' }}
                            >
                                <Link style={{textDecoration: "none", color:"white"}} className="nav-link" to={`/${page}`}>
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
