import { Container, Typography } from '@mui/material';
import { FC } from 'react';
import { WorkExpCardGrid } from '../layouts/WorkExpCardGrid';

export const WorkExp: FC = () => {
    return (
        <>
            <Container>
                <Typography variant="h2" mb={3} mt={4} sx={{
                    fontFamily: 'Pangolin',
                    fontSize: '38px',
                    padding: '0 20px',
                    textAlign: {
                        xs: 'center', md: 'left',
                        animation: 'fadeIn 2s'
                    },
                }}>Work Experience</Typography>

                <Container sx={{ display: 'flex', marginBottom: '40px', flexWrap: 'wrap', justifyContent: 'space-between', width: { sm: '83%', md: '100%' } }}>
                    <WorkExpCardGrid />
                </Container>

            </Container>
        </>
    )
}