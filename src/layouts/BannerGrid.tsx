import React, { FC } from 'react';
import { Box, Container, Typography, useMediaQuery } from '@mui/material'

import react from '../assets/react.svg' 
import vue from '../assets/vue.svg' 
import angular from '../assets/angular.svg' 
import { ResponsiveBanner, hideBanner, bannerDivHTML, bannerOnlineResumeHTML, bannerTxtHTML, bannerNameHTML, bannerWebDevHTML, BannerLogos } from './BannerGrid.styles'

type BannerProps = {
    bannerState: boolean
}

export const BannerGrid: FC<BannerProps> = ({ bannerState }) => {

    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const onlineResume: string = 'ONLINE RESUME';
    const name: string = 'ALLAN AGUILAR';
    const webDev: string = 'WEB DEVELOPER';

    return (
        <>
            {bannerState && (
                <ResponsiveBanner>
                    <Container sx={bannerDivHTML}>
                        <Container>
                            <Typography variant="h2" sx={bannerOnlineResumeHTML}>
                                {onlineResume}
                            </Typography>
                            {isSmallScreen && (
                                <Box mt={5} ml={2}>
                                    <Typography variant="h3" sx={bannerNameHTML}>
                                        {name}
                                    </Typography>
                                    <Typography variant="h3" sx={bannerWebDevHTML}>
                                        {webDev}
                                    </Typography>
                                </Box>
                            )}
                            <Box mt={1} sx={{ display: 'flex' }}>
                                <BannerLogos src={react} />
                                <BannerLogos src={vue} />
                                <BannerLogos src={angular} />
                            </Box>
                        </Container>
                        {(!isSmallScreen && bannerState) && (
                            <Box sx={bannerTxtHTML}>
                                <Typography variant="h3" sx={bannerNameHTML}>
                                    {name}
                                </Typography>
                                <Typography variant="h3" sx={bannerWebDevHTML}>
                                    {webDev}
                                </Typography>
                            </Box>
                        )}
                    </Container>
                </ResponsiveBanner>
            )}
            {!bannerState && <Box style={hideBanner} />}
        </>

    )
}
