// Styles for BannerGrid Component

import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import BannerImg from '../assets/web-world.jpg' // declaration.d.ts

//Banner
export const ResponsiveBanner = styled(Box)(({ theme }) => ({
    backgroundColor: '#000',
    backgroundImage: `url(${BannerImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    // transition: 'width 2s, height 2s',

    width: '100%',
    height: '520px',
    [theme.breakpoints.down('sm')]: {
        backgroundPosition: '-290px',
        height: '372px',
    },
    [theme.breakpoints.up('sm')]: {
        backgroundPosition: 'center center',
        height: '380px',
    },
    [theme.breakpoints.up('md')]: {
        backgroundPosition: 'center center',
        height: '520px',
    },
}));

// Hide Banner
export const hideBanner = {
    backgroundColor: '#000',
    backgroundImage: `url(${BannerImg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '0px',
 //   transition: 'width 3s, height 3s',
    animation: 'slideUp 3s',
    width: '100%'
}

// Banner Parent Content Div
export const bannerDivHTML = {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    width:'100%',
    paddingTop: '40px',
    justifyContent: { sm: 'space-between' },
}

// Online Resume
export const bannerOnlineResumeHTML = {
    marginLeft: '16px',
    fontFamily: 'Pangolin',
    color: '#fff',
    display: 'flex',
    fontSize: { xs: '42px', md: '52px' },
    textShadow: '2px 3px 4px #000000',
    transitionDelay: '1.6s',
    animation: 'fadeIn 1s',
}

// Div Banner Parent for Name and Web Dev Content 
export const bannerTxtHTML = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    width:'100%',
}

// Banner Name 
export const bannerNameHTML = {
    fontFamily: 'Pangolin',
    color: { xs: '#76ffff' },
    fontSize: { xs: '32px', md: '42px' },
    textShadow: '2px 2px 4px #000000',
    transitionDelay: '1.6s',
    animation: 'fadeIn 1s',
}

// Banner Web Dev
export const bannerWebDevHTML = {
    fontFamily: 'Pangolin',
    color: { xs: '#F5E71F' },
    fontSize: { xs: '30px', md: '40px' },
    textShadow: '2px 2px 4px #000000',
    transitionDelay: '1.6s',
    animation: 'fadeIn 1s',
}

//Banner SVG Logos
export const BannerLogos = styled('img')(({ theme }) => ({
    width: "50px",
    padding: '10px',
    animation: 'fadeIn 1s',
    filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))',
    
    [theme.breakpoints.up('md')]: {
        width: "80px",
    },
}));





















export const Container = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
});

export const Title = styled('h1')({
    fontSize: '24px',
    color: '#333',
});

function img(img: any) {
    throw new Error('Function not implemented.');
}
