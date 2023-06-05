import { Box, Container, Typography } from '@mui/material'
import React from 'react'

import react from '../assets/react.svg'
import typeScript from '../assets/ts.svg'
import materialUI from '../assets/materialUI.svg'
import jest from '../assets/jest.svg'
import github from '../assets/github.svg'

import EastIcon from '@mui/icons-material/East'; // Arrow Icon

import { cursiveTypo, bigTypo, cvTechDiv, techPara, arrowIcon, iconsDiv } from './Welcome.styles'

export const Welcome: React.FC = () => {
    return (
        <>
            <Container>
                <Box mt={4}>
                    <Typography variant='h1' sx={cursiveTypo}>Hey there, Welcome!</Typography>
                </Box>
                <Box>
                    <Typography variant='body1' mt={1} sx={bigTypo}><span style={{ fontSize: '24px', }}>Thank you</span> for visiting my Online Resume today!</Typography>
                    <Typography variant='body1' mt={1} sx={bigTypo}><span style={{ fontSize: '24px', }}>I'm Allan</span>, I'm a <span style={{ fontSize: '24px', }}>Front End Developer</span>, I have over 10 years of work experience, I'm currently working as a Front End Developer for Critical Mass, with previous experience working for prestigious Corporates like Intel Corporation, Western Union, Cisco Systems and Citi Bank.</Typography>

                    <Container sx={cvTechDiv}>
                        <Typography variant='body1' mt={1} sx={techPara}><span style={{ fontSize: '24px', }}>I've Developed</span> this <span style={{ fontSize: '24px', }}>Online Resume</span> with these technologies,</Typography>
                        <EastIcon sx={arrowIcon} />
                        <Box sx={iconsDiv}>
                            <img src={react} style={{ width: "50px", padding: '10px 10px 10px 0px', animation: 'fadeIn 2s', }} />
                            <img src={typeScript} style={{ width: "43px", padding: '5px', animation: 'fadeIn 2s', }} />
                            <img src={materialUI} style={{ width: "50px", padding: '12px', animation: 'fadeIn 2s', }} />
                            <img src={jest} style={{ width: "48px", padding: '10px 3px', animation: 'fadeIn 2s', }} />
                            <img src={github} style={{ width: "45px", padding: '20px 10px', animation: 'fadeIn 2s', }} />
                        </Box>
                    </Container>
                </Box>
            </Container>
        </>
    )
}
