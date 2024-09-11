import { useMediaQuery } from "@mui/material";
import { FC } from "react";

import { WorkPanelDesk } from "./WorkPanelDesk";
import { WorkPanelMob } from "./WorkPanelMob";
import { useNavContext } from "../context/NavContext";
import { useCardContext } from "../context/CardContext";

export const WorkPanel: FC = () => {
    const { navState } = useNavContext();
    const { cardSelected } = useCardContext();
    const isLG = useMediaQuery('(min-width:1200px)');

    return (
        <>
            {navState === "/work" && cardSelected !== "" && isLG ? (
                <WorkPanelDesk />
            ) : <WorkPanelMob />}
        </>
    );
};
