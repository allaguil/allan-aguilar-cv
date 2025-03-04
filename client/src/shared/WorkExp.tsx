import { Container, Typography } from '@mui/material';
import { FC } from 'react';
import { WorkExpCardGrid } from '../layouts/WorkExpCardGrid';

import { globalComponentTitle } from '../styles/styles';

export const WorkExp: FC = () => {
    return (
        <>
            <Container sx={{ padding: '0' }}>
                <Typography variant="h2" mb={3} mt={4} sx={globalComponentTitle}>Work Experience</Typography>

                <Container sx={{ display: 'flex', marginBottom: '40px', padding: '0px', flexWrap: 'wrap', justifyContent: 'space-between', width: { sm: '100%' } }}>
                    <WorkExpCardGrid />
                </Container>

            </Container>
        </>
    )
}