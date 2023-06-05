import { Container, Typography } from '@mui/material';
import React, { FC } from 'react';
import { WorkExpCardGrid } from '../layouts/WorkExpCardGrid';

interface Props {
    setNavState: React.Dispatch<React.SetStateAction<string>>;
  }

export const WorkExp: FC<Props> = ({ setNavState }) => {
    return (
        <>
            <Container>
                <Typography variant="h2" mb={3} mt={4} sx={{
                    fontFamily: 'Pangolin',
                    fontSize: '38px',
                    padding: '0 20px',
                    textAlign: { xs:'center', md:'left' },
                }}>Work Experience</Typography>
                <Container sx={{ display:'flex', marginBottom: '40px', flexWrap: 'wrap', justifyContent:'space-between', width: {sm:'83%', md:'100%'} }}>
                    <WorkExpCardGrid setNavState={setNavState} />
                </Container>
            </Container>
        </>
    )
}
