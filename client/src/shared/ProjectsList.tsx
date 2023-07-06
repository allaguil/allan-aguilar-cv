import { Container, Typography } from "@mui/material"

export const ProjectsList = () => {
    return (
        <Container sx={{ marginTop:'60px' }}>

            <Typography variant="h2" mb={3} mt={4} sx={{
                fontFamily: 'Pangolin',
                fontSize: '38px',
                padding: '0 20px',
                textAlign: {
                    xs: 'center', md: 'left',
                    animation: 'fadeIn 2s'
                },
            }}>Projects</Typography>

        </Container>
    )
}
