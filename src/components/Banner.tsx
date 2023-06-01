import React, { FC } from 'react';
import { useEffect, useState } from "react";

import { BannerGrid } from "../layouts/BannerGrid";

// interface is used to define the property data types
// navState: is a prop passed from the Parent Component "CvApp"
interface Props {
    navState: string;
}

// We MUST use an 'interface' when receiving props (navState)
export const Banner: FC<Props> = ({ navState }) => {

    // "useState<React.CSSProperties>" is used to define the type of the 'state' variable when it is a CSS const 
    const [bannerState, setBannerState] = React.useState<boolean>(true);

    // Este Efecto se corre cuando se le da click al Menu
    useEffect(() => {
        navState === '/' ? setBannerState(true) : setBannerState(false);
    }, [navState])

    // Este Efecto solo se corre la primera vez que carga el componente en el Loading
    useEffect(() => {
        navState === '/' ? setBannerState(true) : setBannerState(false);
    }, []);

    return (
        <>
            <BannerGrid bannerState={bannerState} />
        </>
    )
}
