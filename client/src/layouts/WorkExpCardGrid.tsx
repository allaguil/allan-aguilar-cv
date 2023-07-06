import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Box, useMediaQuery } from '@mui/material';
import { workImgs } from '../data/workImgs';
import { Link } from 'react-router-dom';

import { cardDiv, cardBox, logo, pangolinFont } from './WorkExpCardGrid.styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useFetchWorkData } from '../hooks/useFetchWorkData'; // custom hook

interface DataObject {
    company: string;
    role: string;
    description: string;
    img: string;
}

interface Props {
    navState: string;
    setNavState: React.Dispatch<React.SetStateAction<string>>;
    setCardSelected: React.Dispatch<React.SetStateAction<string>>;
    cardSelected: string;
}

export const WorkExpCardGrid: React.FC<Props> = ({
    navState,
    setNavState,
    setCardSelected,
    cardSelected
}) => {
    const [cardActiveHome, setCardActiveHome] = useState<number>(0);
    const [cardActive, setCardActive] = useState<number | null>(0);
    const data = useFetchWorkData();



    useEffect(() => {
        if (data.length > 0 && navState === '/work') {
            // setCardActive(cardActiveHome);
            console.log(cardActiveHome)
            handleWorkPanel(data[cardActiveHome], cardActiveHome);
        }
    }, [data, navState]);


    useEffect(() => {
        if (data.length > 0 && navState === '') {
            setCardActiveHome(0);
            console.log(cardActiveHome)
            setCardActive(cardActiveHome);
            handleWorkClick(data[cardActiveHome], cardActiveHome);
        }
    }, [data, navState]);




    const handleWorkClick = (item: DataObject, index: number) => {
        setCardActiveHome(index);
        setNavState('/work');
        setCardSelected(item.company);
        setCardActive(index);
    };



    const handleWorkPanel = (item: DataObject, index: number) => {
        //console.log(item.company)
        setCardSelected(item.company);
        setCardActive(index);
    };

    return (
        <>
            {data.map((item, index) => (
                <Card
                    key={item._id}
                    sx={{
                        ...cardDiv,
                        ...(navState === '/work' &&
                            cardActive === index && {
                            transform: 'scale(1.1)',
                            boxShadow: '0px 2px 10px 1px rgba(0,0,0,5)'
                        }),
                        ...(navState === '/work' && {
                            cursor: 'pointer'
                        }),
                        ...(navState === '/' && {
                            boxShadow: '0px 2px 10px 1px rgba(0,0,0,5)'
                        })
                    }}
                    onClick={() => handleWorkPanel(item, index)}
                >
                    <Box style={cardBox}>
                        {workImgs.map(
                            (img) =>
                                item.company === img.company && (
                                    <CardMedia key={item._id} sx={logo} image={img.img} />
                                )
                        )}
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
                        {navState !== '/work' && (
                            <Link to="/work">
                                <Button onClick={() => handleWorkClick(item, index)} size="small" sx={pangolinFont}>
                                    Learn More
                                </Button>
                            </Link>
                        )}
                    </CardActions>
                </Card>
            ))}
        </>
    );
}
