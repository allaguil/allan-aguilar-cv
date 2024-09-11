import { Container, Typography } from "@mui/material"

import { globalComponentTitle } from '../styles/styles';

export const ProjectsList = () => {
    return (
        <Container sx={{ marginTop:'60px' }}>

            <Typography variant="h2" mb={3} mt={4} sx={globalComponentTitle}>Projects</Typography>

        </Container>
    )
}
