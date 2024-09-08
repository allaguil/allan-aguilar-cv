import { FC, useEffect, useState } from 'react';
import { Box, Container, Typography, useMediaQuery } from '@mui/material';

import react from '../assets/react.svg';
import vue from '../assets/vue.svg';
import angular from '../assets/angular.svg';
import { bannerOnlineResumeHTML, bannerTxtHTML, bannerNameHTML, bannerWebDevHTML, BannerLogos, contentDiv, leftDiv } from './BannerGrid.styles';

type BannerProps = {
    bannerState: string;
};

export const BannerGrid: FC<BannerProps> = ({ bannerState }) => {

    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const onlineResume: string = 'ONLINE RESUME';
    const name: string = 'ALLAN AGUILAR';
    const webDev: string = 'WEB DEVELOPER';

    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowComponent(true);
        }, 2000);

        return () => clearTimeout(timeout);
    }, [bannerState]);

    return (
        <>
            {bannerState === 'show-banner' ? (
                <div className={bannerState}>
                    <Container sx={contentDiv}>
                        <Box sx={leftDiv}>
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
                        </Box>
                        {!isSmallScreen && bannerState && (
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
                </div>
            ) : (
                <div className={bannerState} />
            )}
        </>
    );
};
