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

import { cardDiv, cardBox, logo, pangolinFont } from './WorkExpCardGrid.styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface DataObject {
    company: string,
    role: string,
    description: string,
    img: string,
};

interface Props {
    navState: string,
    setNavState: React.Dispatch<React.SetStateAction<string>>;
}

export const WorkExpCardGrid: React.FC<Props> = ({ navState, setNavState }) => {

    const handleWorkClick = () => {
        setNavState('/work')
    }

    const handleWorkPanel = () => {
        console.log('handleWorkPanel')
    }

    return (
        <>
            {workExpData.map((item: DataObject) => (
                <Card key={item.company} sx={cardDiv}>
                    <Box style={cardBox}>
                        <CardMedia sx={logo} image={item.img} title={item.company} />
                    </Box>
                    <CardContent sx={{ padding: '0px 20px' }}>
                        <Typography gutterBottom variant="h5" component="div" sx={pangolinFont}>
                            {item.company}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={pangolinFont}>
                            {item.role}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ padding: '10px 15px', display: 'flex', justifyContent: 'center' }}>
                        {navState !== '/work' ? <Link to="/work" ><Button onClick={handleWorkClick} size="small" sx={pangolinFont} className="shake" >Learn More</Button></Link> : <ExpandMoreIcon onClick={handleWorkPanel} sx={{fontSize:"2rem", cursor:'pointer', color:"#000",} } />}
                    </CardActions>
                </Card>
            ))}
        </>
    );
}