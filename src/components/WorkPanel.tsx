import { Box } from "@mui/material";
import { FC } from "react"
import { workExpData } from '../helpers/workExpData';

interface Props {
    navState: string,
    cardSelected: string,
}

export const WorkPanel: FC<Props> = ({ navState, cardSelected }) => {

    return (
        <>
            {navState === '/work' && cardSelected !== '' ? (
                <>
                    {workExpData.map((card) => (
                        cardSelected === card.company ? (
                            <Box key={card.company}>
                                <h3>{card.company}</h3>
                                <hr />
                                <p><img src={card.img} width="200px"/></p>
                                <p>{card.role}</p>
                                <p>{card.description}</p>
                                <p>{card.technologies}</p>
                            </Box>
                        ) : null
                    ))}
                </>
            ) : null}
        </>
    )
}
