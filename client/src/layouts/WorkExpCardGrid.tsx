import { FC, useEffect, useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box, IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { workImgs } from '../data/workImgs';
import { cardDiv, cardBox, logo, pangolinFont } from './WorkExpCardGrid.styles';
import { useFetchWorkData } from '../hooks/useFetchWorkData';
import { useNavContext } from '../context/NavContext';
import { Link } from 'react-router-dom';
import { useCardContext } from '../context/CardContext';

interface DataObject {
    company: string;
    role: string;
    description: string;
    img: string;
}

export const WorkExpCardGrid: FC = () => {
    const { setCardSelected } = useCardContext();
    const { navState, setNavState } = useNavContext();
    const [cardActiveHome, setCardActiveHome] = useState<number>(0);
    const [cardActive, setCardActive] = useState<number | null>(0);
    const data = useFetchWorkData();
    const [startIndex, setStartIndex] = useState(0);
    const cardWidth = 250;
    const [translateXValue, setTranslateXValue] = useState(0);

    useEffect(() => {
        if (data.length > 0 && navState === '/work') {
            handleWorkPanel(data[cardActiveHome], cardActiveHome);
        }
    }, [data, navState]);

    useEffect(() => {
        if (data.length > 0 && navState === '') {
            setCardActiveHome(0);
            setCardActive(cardActiveHome);
            handleWorkClick(data[cardActiveHome], cardActiveHome);
        }
    }, [data, navState]);

    useEffect(() => {
        if (data.length > 0) {
            updateTranslateX();
        }
    }, [startIndex, data]);

    const handleWorkClick = (item: DataObject, index: number) => {
        setCardActiveHome(index);
        setNavState('/work');
        setCardSelected(item.company);
        setCardActive(index);
    };

    const handleWorkPanel = (item: DataObject, index: number) => {
        setCardSelected(item.company);
        setCardActive(index);
    };

    const handleNext = () => {
        if (startIndex < data.length - 1) {
            setStartIndex((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex((prev) => prev - 1);
        }
    };

    const updateTranslateX = () => {
        // debugger
        const viewportWidth = window.innerWidth; // Ancho del viewport
        const cardWidth = 250; // Ancho de la tarjeta
        const cardMargin = (viewportWidth - cardWidth) / 2;  // El margen será la mitad del espacio sobrante (esto centra las tarjetas)
    
        const totalCardWidth = cardWidth + cardMargin * 2;  // Ancho total de la tarjeta (con márgenes)
    
        if (startIndex === 0) {
            setTranslateXValue(0); // Aseguramos que al iniciar el valor sea 0
        } else {
            // Desplazamiento para mover el carrusel
            setTranslateXValue(-(startIndex * totalCardWidth));
        }
    };
    
    
    return (
        <Box sx={{ position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'flex-start', width: '100%', margin: '0 auto', padding:'0' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', transition: 'transform 0.3s ease-in-out', transform: `translateX(${translateXValue}px)` }}>
                {data.map((item, index) => (
                    <Box key={item._id} sx={{ display: 'flex', justifyContent:'center', width: '100vw', margin: '0px auto', }}>
                        <Card
                            sx={{
                                ...cardDiv,
                                width: `${cardWidth}px`,
                                flexShrink: 0,
                                ...(navState === '/work' &&
                                    cardActive === index && {
                                    transform: 'scale(1.1)',
                                    boxShadow: '0px 1px 5px 1px rgba(0,0,0,5)'
                                }),
                                ...(navState === '/work' && {
                                    cursor: 'pointer'
                                }),
                                ...(navState === '/' && {
                                    boxShadow: '0px 1px 5px 1px rgba(0,0,0,5)'
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
                    </Box>
                ))}
            </Box>
            <IconButton sx={{ position: 'absolute', left: '15px', padding: '0', top: '50%', transform: 'translateY(-50%)' }} onClick={handlePrev} disabled={startIndex === 0}>
                <NavigateBeforeIcon />
            </IconButton>
            <IconButton sx={{ position: 'absolute', right: '15px', padding: '0', top: '50%', transform: 'translateY(-50%)' }} onClick={handleNext} disabled={startIndex >= data.length - 1}>
                <NavigateNextIcon />
            </IconButton>
        </Box>
    );
};