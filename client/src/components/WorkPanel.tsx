import { Box, Container } from "@mui/material";
import { FC, useEffect, useState } from "react";

import { workImgs } from '../data/workImgs';
import { useFetchWorkData } from "../hooks/useFetchWorkData"; // custom hook

interface Props {
    navState: string;
    cardSelected: string;
}

export const WorkPanel: FC<Props> = ({ navState, cardSelected }) => {

    const data = useFetchWorkData();

    return (
        <>
            {navState === "/work" && cardSelected !== "" ? (
                <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
                    {data.map((card) => (
                        cardSelected === card.company ? (
                            <Container key={card._id} sx={{ animation: "fadeIn 1s", boxShadow: "0px 2px 10px 1px rgba(0,0,0,0.2)", borderRadius: "4px", fontFamily: "Pangolin" }}>
                                <Box sx={{ padding: "20px 45px" }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <h3 style={{ alignSelf: "center", fontSize: "38px" }}>{card.company}</h3>
                                        {workImgs.map((img) => (
                                            card.company === img.company ? (
                                                <img key={card._id} src={img.img} width="90px" alt={card.company} />
                                            ) : null
                                        ))}
                                    </Box>
                                    <Box sx={{ lineHeight: "30px", fontSize: "20px" }}>
                                        <p><span style={{ color: "rgba(0, 0, 0, 0.6)" }}>Job Role:</span> {card.role}</p>
                                        <p><span style={{ color: "rgba(0, 0, 0, 0.6)" }}>Job Description:</span> {card.description}</p>
                                        <p><span style={{ color: "rgba(0, 0, 0, 0.6)" }}>Technologies:</span> {card.technologies}</p>
                                        <p><span style={{ color: "rgba(0, 0, 0, 0.6)" }}>Website:</span> <a href={card.url} target="_blank" rel="noopener noreferrer">{card.urlValue}</a></p>
                                    </Box>
                                </Box>
                            </Container>
                        ) : null
                    ))}
                </div>
            ) : null}
        </>
    );
};
