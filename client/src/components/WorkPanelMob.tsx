import React, { useState } from 'react';
import { FC } from "react";
import { Modal, Box, Container, Typography } from '@mui/material';
import { useFetchWorkData } from '../hooks/useFetchWorkData';
import { useCardContext } from '../context/CardContext';

export const WorkPanelMob: FC = () => {
    const { cardSelected } = useCardContext();
    const data = useFetchWorkData();

    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpen = () => {
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
    };

    React.useEffect(() => {
        if (cardSelected) {
            handleOpen();
        }
    }, [cardSelected]);

    return (
        <Box>
            {data.map((card) =>
                cardSelected === card.company && (
                    <Container key={card._id}>
                        <Modal open={isModalOpen} onClose={handleClose}>
                            <Box
                                sx={{
                                    position: 'fixed',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    zIndex: 9999,
                                }}
                            >
                                <Box sx={{ p: 2, backgroundColor: '#fff', borderRadius: 4 }}>
                                    {/* Modal Content */}
                                    <Typography variant="h3">{card.company}</Typography>
                                    <Box sx={{ lineHeight: "30px", fontSize: "20px" }}>
                                        <Typography variant="body1"><Typography variant="body2">Job Role:</Typography> {card.role} <Typography variant="body2">{card.year}</Typography></Typography>
                                        <Typography variant="body1"><Typography variant="body2">Job Description:</Typography> {card.description}</Typography>
                                        <Typography variant="body1"><Typography variant="body2">Technologies:</Typography> {card.technologies}</Typography>
                                        <Typography variant="body1"><Typography variant="body2">Website:</Typography> <a href={card.url} target="_blank">{card.urlValue}</a></Typography>
                                    </Box>
                                    <button onClick={handleClose}>Close</button>
                                </Box>
                            </Box>
                        </Modal>
                    </Container>
                )
            )}
        </Box>
    );
}
