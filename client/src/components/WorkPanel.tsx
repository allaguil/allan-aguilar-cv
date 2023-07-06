import { useMediaQuery } from "@mui/material";
import { FC } from "react";

import { WorkPanelDesk } from "./WorkPanelDesk";
import { WorkPanelMob } from "./WorkPanelMob";

interface Props {
    navState: string;
    cardSelected: string;
}

export const WorkPanel: FC<Props> = ({ navState, cardSelected }) => {

    const isLG = useMediaQuery('(min-width:1200px)');

    return (
        <>
            {navState === "/work" && cardSelected !== "" && isLG ? (
                <WorkPanelDesk cardSelected={cardSelected} />
            ) : <WorkPanelMob cardSelected={cardSelected} />}
        </>
    );
};
