import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export const Welcome: React.FC = () => {

    const welcomeHTML = {
        // textAlign: 'center',
        fontFamily: 'Satisfy',
        fontSize: '38px',
        padding:'0 20px',
        // transform: 'rotate(-2deg)',
    }

    return (
        <>
            <Container>
                <Box mt={2}>
                    <Typography variant='h1' sx={welcomeHTML}>Hey there, Welcome!</Typography>
                </Box>
                <Box>
                    <Typography variant='body1' mt={1} sx={{ padding:'0 20px', fontSize:'18px', fontFamily:'Pangolin' }}><span style={{ fontSize:'24px', }}>Thank you</span> for visiting my Online Resume today.</Typography>
                    <Typography variant='body1' mt={1} sx={{ padding:'0 20px', fontSize:'18px', fontFamily:'Pangolin' }}><span style={{ fontSize:'24px', }}>I'm Allan</span>, I'm a Front End Developer, I have over 10 years of work experience, I'm currently working as a Front End Developer for Critical Mass, with previous experience working for prestigious Corporates like Intel Corporation, Western Union, Cisco Systems and Citi Bank.</Typography>
                    <Typography variant='body1' mt={1} sx={{ padding:'0 20px', fontSize:'18px', fontFamily:'Pangolin' }}><span style={{ fontSize:'24px', }}>I've Developed</span> this Online Resume with these technologies,</Typography>
                </Box>
            </Container>
        </>
    )
}
