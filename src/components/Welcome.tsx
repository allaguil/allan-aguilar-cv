import { Box, Container, Typography } from '@mui/material'
import React from 'react'

import react from '../assets/react.svg'
import typeScript from '../assets/ts.svg'
import materialUI from '../assets/materialUI.svg'
import jest from '../assets/jest.svg'
import github from '../assets/github.svg'

import EastIcon from '@mui/icons-material/East'; // Arrow Icon

export const Welcome: React.FC = () => {

    const welcomeHTML = {
        // textAlign: 'center',
        fontFamily: 'Satisfy',
        fontSize: '38px',
        padding: '0 20px',
        // transform: 'rotate(-2deg)',
    }

    const cvTechDiv = {
        display: 'flex',
        flexDirection: {xs:'column', md:'row'},
    }

    const techPara = {
        fontSize: '18px',
        fontFamily: 'Pangolin',
        width: {xs:'100%', md:'50%'}
    }

    const arrowIcon = {
        display: {xs:'none', md:'inline'},
        margin:'15px 10px',
        animation: 'fadeIn 2s'
    }

    const iconsDiv = {
        display: 'flex',
        justifyContent: {xs: 'space-between'},
        position:'relative',
        bottom:'10px',
        width: {xs:'100%', md:'50%'},
    }

    return (
        <>
            <Container>
                <Box mt={4}>
                    <Typography variant='h1' sx={welcomeHTML}>Hey there, Welcome!</Typography>
                </Box>
                <Box>
                    <Typography variant='body1' mt={1} sx={{ padding: '0 20px', fontSize: '18px', fontFamily: 'Pangolin' }}><span style={{ fontSize: '24px', }}>Thank you</span> for visiting my Online Resume today!</Typography>
                    <Typography variant='body1' mt={1} sx={{ padding: '0 20px', fontSize: '18px', fontFamily: 'Pangolin' }}><span style={{ fontSize: '24px', }}>I'm Allan</span>, I'm a <span style={{ fontSize: '24px', }}>Front End Developer</span>, I have over 10 years of work experience, I'm currently working as a Front End Developer for Critical Mass, with previous experience working for prestigious Corporates like Intel Corporation, Western Union, Cisco Systems and Citi Bank.</Typography>

                    <Container sx={cvTechDiv}>
                        <Typography variant='body1' mt={1} sx={techPara}><span style={{ fontSize: '24px', }}>I've Developed</span> this <span style={{ fontSize: '24px', }}>Online Resume</span> with these technologies,</Typography>
                        <EastIcon sx={arrowIcon}/>
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
