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

interface DataObject {
    company: string,
    role: string,
    description: string,
    img: string,
};

interface Props {
    setNavState: React.Dispatch<React.SetStateAction<string>>;
  }

export const WorkExpCardGrid: React.FC<Props> = ({setNavState}) => {

    return (
        <>
            {workExpData.map((item: DataObject) => (
                <Card key={item.company} sx={cardDiv}>
                    <Box style={cardBox}>
                        <CardMedia sx={logo} image={item.img} title={item.company} />
                    </Box>
                    <CardContent sx={{padding:'0px 20px'}}>
                        <Typography gutterBottom variant="h5" component="div" sx={pangolinFont}>
                            {item.company}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={pangolinFont}>
                            {item.role}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{padding:'10px 15px', display:'flex', justifyContent:'center'}}>
                        <Link to="/work" >
                            <Button onClick={() => setNavState('/work')} size="small" sx={pangolinFont} className="shake" >Learn More</Button>
                        </Link>
                    </CardActions>
                </Card>
            ))}
        </>
    );
}