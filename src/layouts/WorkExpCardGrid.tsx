import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Box } from '@mui/material';
import { workExpData } from '../helpers/workExpData';
import { Link } from 'react-router-dom';

interface DataObject {
    company: string,
    role: string,
    description: string,
    img: string,
};

export const WorkExpCardGrid: React.FC = () => {
    return (
        <>
            {workExpData.map((item: DataObject) => (
                <Card key={item.company} sx={{ maxWidth: 250, margin: { xs: '20px auto', lg: '20px', boxShadow: '0px 2px 10px 1px rgba(0,0,0,0.2)', } }}>

                    <Box style={{ height: 140, width: 220, margin: '0 auto' }}>
                        <CardMedia
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                backgroundSize: '80% auto',
                            }}
                            image={item.img}
                            title={item.company}
                        />
                    </Box>

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.company}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.role}
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Link to="/work">
                            <Button size="small">Learn More</Button>
                        </Link>
                    </CardActions>

                </Card>
            ))}
        </>
    );
}