import { Box, Button, Container, LinearProgress, Typography } from '@mui/material';
import { skillsImgs } from '../data/skillsImgs';
import { FC } from 'react';
import skillsData from '../data/skillsData.json';
import { useNavigate } from 'react-router-dom';

interface Props {
    currentSkill: number;
}

interface Skill {
    skill: string;
    level: string;
    percentage: number;
    description: string[];
    order: number;
}

export const SkillInfo: FC<Props> = ({ currentSkill }) => {
    const skillData: Skill = skillsData[currentSkill - 1];
    const navigate = useNavigate();

    const handleLearnMoreClick = () => {
        navigate('/skills');
    };

    return (
        <Container sx={{ display: 'flex', alignItems: 'center', height: '220px' }}>
            {/* JS Logo Left Box */}
            <Box sx={{ width: '20%', padding: '20px 45px', display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <Box>
                    <img key={skillData.skill} src={skillsImgs[currentSkill - 1].img} style={{ width: '100px', animation: 'fadeIn 2s' }} />
                </Box>
                <Box sx={{ lineHeight: '30px', fontSize: '20px' }}>
                    <Typography variant="body1" sx={{ fontFamily: 'Pangolin', fontSize: '26px', margin: '5px 0px', animation: 'fadeIn 2s' }}>
                        {skillData.skill}
                    </Typography>
                </Box>
            </Box>

            {/* Skill Level Right Box */}
            <Box sx={{ display: 'flex', width: '80%', flexDirection: 'column', padding: '20px 45px', animation: 'fadeIn 2s' }}>
                <Box>
                    <Typography variant="body1" sx={{ fontFamily: 'Pangolin', fontSize: '26px' }}>
                        Technical Expertise: {skillData.level}
                    </Typography>

                    <Box sx={{ display: 'flex' }}>
                        <LinearProgress variant="determinate" value={skillData.percentage} sx={{ margin: '15px 0px 10px 0px', width: '80%' }} />
                        <Typography variant="body1" color="primary" sx={{ fontFamily: 'Pangolin', fontSize: '18px', marginLeft: '10px' }}>
                            {skillData.percentage}%
                        </Typography>
                    </Box>
                    <Button variant="contained" color="primary" sx={{ margin: '10px 0px' }} onClick={handleLearnMoreClick}>
                        Learn More
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};
