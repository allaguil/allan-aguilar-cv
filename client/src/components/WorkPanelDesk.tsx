import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { workImgs } from '../data/workImgs';
import { FC } from "react";
import { useFetchWorkData } from "../hooks/useFetchWorkData"; // custom hook

import { workPanelBox, cardContainer, cardBox, cardHeading, cardDataTxt, cardDataSpan, cardYear } from './WorkPanelDesk.styles';


interface Props {
    cardSelected: string;
}


export const WorkPanelDesk: FC<Props> = ({ cardSelected }) => {

const data = useFetchWorkData();

  return (
    <Box sx={workPanelBox}>
                    {data.map((card) => (
                        cardSelected === card.company ? (
                            <Container key={card._id} sx={cardContainer}>
                                <Box sx={{ padding: "20px 45px" }}>
                                    <Box sx={cardBox}>
                                        <Typography variant="h3" style={cardHeading}>{card.company}</Typography>
                                        {workImgs.map((img) => (
                                            card.company === img.company ? (
                                                <img key={card._id} src={img.img} width="90px" alt={card.company} />
                                            ) : null
                                        ))}
                                    </Box>
                                    <Box sx={{ lineHeight: "30px", fontSize: "20px" }}>
                                        <Typography variant="body1" sx={cardDataTxt}><Typography variant="body2" sx={cardDataSpan}>Job Role:</Typography> {card.role} <Typography variant="body2" style={cardYear}>{card.year}</Typography></Typography>
                                        <Typography variant="body1" sx={cardDataTxt}><Typography variant="body2" sx={cardDataSpan}>Job Description:</Typography> {card.description}</Typography>
                                        <Typography variant="body1" sx={cardDataTxt}><Typography variant="body2" sx={cardDataSpan}>Technologies:</Typography> {card.technologies}</Typography>
                                        <Typography variant="body1" sx={cardDataTxt}><Typography variant="body2" sx={cardDataSpan}>Website:</Typography> <a href={card.url} target="_blank">{card.urlValue}</a></Typography>
                                    </Box>
                                </Box>
                            </Container>
                        ) : null
                    ))}
                </Box>
  )
}
