import { Box, Button, CardMedia, Container, LinearProgress, Typography } from '@mui/material'
import { skillsImgs } from '../data/skillsImgs'

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const SkillSet = () => {
    return (
        <Container>


            <Typography variant="h2" mb={3} mt={4} sx={{
                fontFamily: 'Pangolin',
                fontSize: '38px',
                padding: '0 20px',
                textAlign: {
                    xs: 'center', md: 'left',
                    animation: 'fadeIn 2s'
                },
            }}>Skills</Typography>


            <Container sx={{ display: 'flex', width: '100%', borderRadius: '4px', boxShadow: '0px 2px 10px 1px rgba(0,0,0,0.2)' }}>

                <Container sx={{ display: 'flex' }}>

                    {/* JS Logo Left Box */}
                    <Box sx={{ padding: "20px 45px", }}>
                        <Box>
                            {skillsImgs.map((img) =>
                                <img key={img.company} src={img.img} style={{ width: '120px' }} />
                            )}
                        </Box>
                        <Box sx={{ lineHeight: "30px", fontSize: "20px" }}>
                            <Typography variant="body1" sx={{ fontFamily: 'Pangolin', fontSize: '26px', margin: '5px 0px' }}>
                                JavaScript
                            </Typography>
                        </Box>
                    </Box>


                    {/* Skill Level Right Box */}
                    <Box sx={{ display: 'flex', width: '80%', flexDirection: 'column', padding: "20px 45px" }}>

                        <Box>
                            <Typography variant="body1" sx={{ fontFamily: 'Pangolin', fontSize: '26px', }}>
                                EXPERT LEVEL 
                            </Typography>

                            <Box sx={{display:'flex'}}>
                                <LinearProgress variant="determinate" value={90} sx={{ margin: '15px 0px 10px 0px', width: '80%' }} />
                                <Typography variant="body1" color="primary" sx={{ fontFamily: 'Pangolin', fontSize: '18px', marginLeft: '10px', }}>
                                    90%
                                </Typography>
                            </Box>

                            <Button variant="contained" color="primary" sx={{ margin: '10px 0px' }}>
                                Learn More
                            </Button>
                        </Box>
                    </Box>

                </Container>


                {/* Arrows */}
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', }}>
                    <NavigateBeforeIcon sx={{ cursor: 'pointer', margin: '20px 8px' }} />
                    <NavigateNextIcon sx={{ cursor: 'pointer', margin: '20px 8px' }} />
                </Box>

            </Container>
        </Container>
    )
}
