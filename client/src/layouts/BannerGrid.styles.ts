// Styles for BannerGrid Component

import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';


// Main contentDiv
export const contentDiv = {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    width: '100%',
    paddingTop: { xs: '40px', sm: '40px' },
    justifyContent: { sm: 'center' },
    maxWidth: {xl:'1550px'},
}

// Left Div
export const leftDiv = {
    flexBasis: '100%',
    paddingTop: { sm: '40px' },
}

// ONLINE RESUME
export const bannerOnlineResumeHTML = {
    marginLeft: '16px',
    fontFamily: 'Pangolin',
    color: '#fff',
    display: 'flex',
    fontSize: { xs: '42px', md: '52px' },
    textShadow: '2px 3px 4px #000000',
    transitionDelay: '9s',
    animation: 'fadeIn 3s',
}

// Div Banner Parent for Name and Web Dev Content 
export const bannerTxtHTML = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: '100%',
    paddingTop: { sm: '40px' },
}

// ALLAN AGUILAR 
export const bannerNameHTML = {
    fontFamily: 'Pangolin',
    color: { xs: '#fff' },
    fontSize: { xs: '32px', md: '42px' },
    textShadow: '2px 2px 4px #000000',
    transitionDelay: '9s',
    animation: 'fadeIn 3s',
}

// SOFTWARE DEVELOPER
export const bannerWebDevHTML = {
    fontFamily: 'Pangolin',
    // color: { xs: '#F5E71F' },
    color: { xs: '#7EC14A' },
    fontSize: { xs: '30px', md: '30px' },
    textShadow: '2px 2px 4px #000000',
    transitionDelay: '9s',
    animation: 'fadeIn 3s',
}

//Banner SVG Logos
export const BannerLogos = styled('img')(({ theme }) => ({
    width: "50px",
    padding: '10px',
    animation: 'fadeIn 2s',
    filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))',

    [theme.breakpoints.up('md')]: {
        width: "75px",
    },
}));





















//Banner
// export const ResponsiveBanner = styled(Box)(({ theme }) => ({
//     backgroundColor: '#000',
//     backgroundImage: `url(${BannerImg})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     transition: 'height 0.3s ease, width 2s, height 2s',
//     width: '100%',
//     height: '520px',

//     [theme.breakpoints.down('sm')]: {
//         backgroundPosition: '-290px',
//         height: '372px',
//     },
//     [theme.breakpoints.up('sm')]: {
//         backgroundPosition: 'center center',
//         height: '380px',
//     },
//     [theme.breakpoints.up('md')]: {
//         backgroundPosition: 'center center',
//         height: '520px',
//     },
// }));


// Hide Banner
// export const HideBanner = styled(Box)(({ theme }) => ({
//     backgroundColor: '#000',
//     backgroundImage: `url(${BannerImg})`,
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     height: '0px',
//     width: '100%',
//     transition: 'height 0.3s ease',
//     overflow: 'hidden',
//   }));


// Banner Parent Content Div
// export const bannerDivHTML = {
//     display: 'flex',
//     flexDirection: { xs: 'column', sm: 'row' },
//     width: '100%',
//     paddingTop: '40px',
//     justifyContent: { sm: 'space-between' },
// }