import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Box } from '@mui/material';
import { workImgs } from '../data/workImgs';
import { Link } from 'react-router-dom';

import { cardDiv, cardBox, logo, pangolinFont } from './WorkExpCardGrid.styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useFetchWorkData } from '../hooks/useFetchWorkData'; // custom hook

interface DataObject {
    company: string,
    role: string,
    description: string,
    img: string,
};

interface Props {
    navState: string,
    setNavState: React.Dispatch<React.SetStateAction<string>>,
    setCardSelected: React.Dispatch<React.SetStateAction<string>>,
}

export const WorkExpCardGrid: React.FC<Props> = ({ navState, setNavState, setCardSelected }) => {

    const [cardActive, setCardActive] = useState<number | null>(null);
    const data = useFetchWorkData();

    // Click to "Learn More" in "Work Experience" Component (/homePage)
    const handleWorkClick = (item: DataObject) => {
        setNavState('/work')
        setCardSelected(item.company)
    }

    // Click to "Card Arrow" in "Work Experience" Component (/workPage)
    const handleWorkPanel = (item: DataObject, index: number) => {
        setCardSelected(item.company)
        setCardActive(index);
    };

    
    return (
        <>
            {data.map((item, index) => (
                <Card key={item._id} sx={cardDiv}>
                    <Box style={cardBox}>
                        {workImgs.map((img) => (
                            item.company === img.company ? (
                                <CardMedia key={item._id} sx={logo} image={img.img} title={item.company} />
                            ) : null
                        ))}
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
                        {navState !== '/work' ? (
                            <Link to="/work">
                                <Button onClick={() => handleWorkClick(item)} size="small" sx={pangolinFont} className="shake">
                                    Learn More
                                </Button>
                            </Link>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <ExpandMoreIcon onClick={() => handleWorkPanel(item, index)} sx={{ fontSize: '2rem', cursor: 'pointer', color: '#000' }} />
                                <div
                                    className="triangle"
                                    style={{
                                        display: cardActive === index ? 'flex' : 'none',
                                        animation: 'fadeIn 1s',
                                        zIndex: '1',
                                        width: 0,
                                        height: 0,
                                        borderLeft: '25px solid transparent',
                                        borderRight: '25px solid transparent',
                                        borderBottom: '50px solid #fff',
                                        filter: 'drop-shadow(0px -3px 2px rgba(0,0,0,0.2))',
                                        position: 'absolute',
                                        marginTop: '53px',
                                        marginLeft: '-9px',
                                    }}
                                ></div>
                            </div>
                        )}
                    </CardActions>
                </Card>
            ))}
        </>
    );
}