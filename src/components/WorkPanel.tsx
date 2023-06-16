import { Box, Container } from "@mui/material";
import { FC } from "react"
import { workExpData } from '../data/workExpData';

import aem from '../assets/aem.svg'

interface Props {
    navState: string,
    cardSelected: string,
}

export const WorkPanel: FC<Props> = ({ navState, cardSelected }) => {

    return (
        <>
            {navState === '/work' && cardSelected !== '' ? (
                <div style={{position: 'relative', display:'flex', flexDirection: 'column'}}>
                    {workExpData.map((card) => (
                        cardSelected === card.company ? (
                            <>
                                

                                <Container key={card.company} sx={{ animation: 'fadeIn 1s', boxShadow: '0px 2px 10px 1px rgba(0,0,0,0.2)', borderRadius: '4px', fontFamily: 'Pangolin' }}>

                                    <Box sx={{ padding: '20px 45px' }}>

                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', }}>
                                            <h3 style={{ alignSelf: 'center', fontSize: '38px' }}>{card.company}</h3>
                                            <img src={card.img} width="100px" />
                                        </Box>


                                        <Box sx={{ lineHeight: '30px', fontSize: '20px' }}>
                                            <p><span style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Job Role:</span> {card.role}</p>
                                            <p><span style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Job Description:</span> {card.description}</p>
                                            <p><span style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Technologies:</span> {card.technologies}</p>
                                            <p><span style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Website:</span> <a href={card.url} target="_blank">{card.urlValue}</a></p>

                                            {/* <img src={aem} width="100px" /> */}

                                        </Box>
                                    </Box>
                                </Container>
                            </>
                        ) : null
                    ))}
                </div>
            ) : null}
        </>
    )
}


// TRIANGLE SHAPE div.triangle-up
//     width: 0;
//     height: 0;
//     border-left: 25px solid transparent;
//     border-right: 25px solid transparent;
//     border-bottom: 50px solid #fff;
//     filter: drop-shadow(0px -3px 2px rgba(0,0,0,0.2));
//     position: relative;
//     left: 215px;
//     bottom: 0px;