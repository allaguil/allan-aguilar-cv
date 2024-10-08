import { Box, Container, Typography } from '@mui/material'

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { SkillInfo } from '../components/SkillInfo';

import { useState } from 'react';

import { globalComponentTitle } from '../styles/styles';

export const SkillSet = () => {

    const [currentSkill, setCurrentSkill] = useState(1);
    const totalSkills = 13;

    return (
        <Container>
            <Typography variant="h2" mb={3} mt={4} sx={globalComponentTitle}>Skills</Typography>

            <Container sx={{ display: 'flex', width: '100%', borderRadius: '4px', boxShadow: '0px 2px 10px 1px rgba(0,0,0,0.8)' }}>

                <SkillInfo currentSkill={currentSkill} />



                {/* Arrows */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', }}>


                        
                        <NavigateBeforeIcon sx={{ cursor: 'pointer', margin: '20px 8px' }} onClick={() => {
                            if (currentSkill > 1) {
                                setCurrentSkill(currentSkill - 1);
                            }
                        }} />


                        <NavigateNextIcon sx={{ cursor: 'pointer', margin: '20px 8px' }} onClick={() => {
                            if (currentSkill < totalSkills) {
                                setCurrentSkill(currentSkill + 1);
                            }
                        }} />



                    </Box>
                    <Typography sx={{ fontFamily: 'Pangolin', fontSize: '18px', color: 'gray' }}>{currentSkill}/{totalSkills}</Typography>
                </Box>






            </Container>
        </Container>
    )
}
