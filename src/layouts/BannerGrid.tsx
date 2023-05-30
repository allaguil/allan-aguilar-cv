import { Box, Container, Typography, useMediaQuery } from '@mui/material'
import { styled } from '@mui/material/styles'

import '../index.css';


import BannerImg from '../assets/web-world.jpg' // declaration.d.ts

type BannerProps = {
    bannerState: boolean
}

const ResponsiveBanner = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        backgroundColor: '#000',
        backgroundImage: `url(${BannerImg})`,
        backgroundPosition: '-290px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        transition: 'width 2s, height 2s',
        width: '100%',
        height: '372px'
    },
    [theme.breakpoints.up('sm')]: {
        backgroundColor: '#000',
        backgroundImage: `url(${BannerImg})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        transition: 'width 2s, height 2s',
        width: '100%',
        height: '380px'
    },
    [theme.breakpoints.up('md')]: {
        backgroundColor: '#000',
        backgroundImage: `url(${BannerImg})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        transition: 'width 2s, height 2s',
        width: '100%',
        height: '520px'
    },
}));


// bannerState : boolean
export const BannerGrid: React.FC<BannerProps> = ({ bannerState }) => {

    // const showBanner = {
    //     backgroundColor: '#000',
    //     backgroundImage: `url(${BannerImg})`,
    //     backgroundPosition: 'center center',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover',
    //     transition: 'width 2s, height 2s',
    //     width: '100%',
    // }

    const hideBanner = {
        backgroundColor: '#000',
        backgroundImage: `url(${BannerImg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '0px',
        transition: 'width 2s, height 2s',
        width: '100%'
    }

    const bannerDivHTML = {
        display: 'flex',
        flexDirection: { xs:'column', sm:'row' },
        //alignItems: 'center',
        paddingTop: '40px',
        justifyContent: { sm:'space-between' },
        height: '100%',
        // flex: { xs: '100%', sm: '50%', md: '33%'}
    }

    const bannerOnlineResumeHTML = {
        //color: { xs:'#fff', sm: '50%', md: 'green', lg:'', xl:'#000'},
        marginLeft: '16px',
        fontFamily: 'Pangolin',
        color: { xs: '#fff' },
        display: 'flex',
        fontSize: {xs:'42px', md:'52px'},
        textShadow: '2px 3px 4px #000000',
        transitionDelay: '1.6s',
        animation: 'fadeIn 2s',
    }

    const bannerTxtHTML = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    }

    const bannerNameHTML = {
        fontFamily: 'Pangolin',
        color: { xs: '#76ffff' },
        fontSize: { xs:'32px', md:'42px' },
        textShadow: '2px 2px 4px #000000',
        transitionDelay: '1.6s',
        animation: 'fadeIn 2s',
    }

    const bannerWebDevHTML = {
        fontFamily: 'Pangolin',
        color: { xs: '#F5E71F' },
        fontSize: { xs:'30px', md:'40px' },
        textShadow: '2px 2px 4px #000000',
        transitionDelay: '1.6s',
        animation: 'fadeIn 2s',
    }

    // 'useMediaQuery' to declare the CSS breakpoints
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const isMediumScreen = useMediaQuery('(min-width:601px) and (max-width:899px)');
    const isLargeScreen = useMediaQuery('(min-width:900px)');

    const onlineResume:string = 'ONLINE RESUME';
    const name:string = 'ALLAN AGUILAR';
    const webDev:string = 'WEB DEVELOPER';

    return (
        <>

            {/* Mobile */}
            {
                (isSmallScreen && bannerState) ?
                    <ResponsiveBanner>
                        <Container sx={bannerDivHTML}>
                            <Typography variant="h2" sx={bannerOnlineResumeHTML}>{onlineResume}</Typography>

                            <Box mt={5} ml={2}>
                                <Typography variant="h3" sx={bannerNameHTML}>{name}</Typography>
                                <Typography variant="h3" sx={bannerWebDevHTML}>{webDev}</Typography>
                            </Box>


                        </Container>
                    </ResponsiveBanner> :
                    <Box style={hideBanner} />
            }


            {/* Tablet */}
            {
                (isMediumScreen && bannerState) ?
                    <ResponsiveBanner>
                        <Container sx={bannerDivHTML}>
                            <Typography variant="h2" sx={bannerOnlineResumeHTML}>{onlineResume}</Typography>

                            <Box sx={bannerTxtHTML}>
                                <Typography variant="h3" sx={bannerNameHTML}>{name}</Typography>
                                <Typography variant="h3" sx={bannerWebDevHTML}>{webDev}</Typography>
                            </Box>

                        </Container>
                    </ResponsiveBanner> :
                    <Box style={hideBanner} />
            }

            {/* Desktop */}
            {
                (isLargeScreen && bannerState) ?
                    <ResponsiveBanner>
                        <Container sx={bannerDivHTML}>
                            <Typography variant="h2" sx={bannerOnlineResumeHTML}>{onlineResume}</Typography>

                            <Box sx={bannerTxtHTML}>
                                <Typography variant="h3" sx={bannerNameHTML}>{name}</Typography>
                                <Typography variant="h3" sx={bannerWebDevHTML}>{webDev}</Typography>
                            </Box>

                        </Container>
                    </ResponsiveBanner> :
                    <Box style={hideBanner} />
            }





            {/* {isSmallScreen && <Box style={bannerState} height={'372px'} />}
            {isMediumScreen && <Box style={bannerState} height={'320px'} />}
            {isLargeScreen && <BannerGrid bannerState={bannerState} />} */}

        </>
    )
}
