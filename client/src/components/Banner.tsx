import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BannerGrid } from '../layouts/BannerGrid';
import { useNavContext } from '../context/NavContext';

interface Props {
  navState: string;
}

export const Banner: FC = () => {
  const { navState } = useNavContext();
  const [bannerState, setBannerState] = useState<string>('show-banner');
  // const location = useLocation();

  useEffect(() => {
    const isHome = navState === '/';
    setBannerState(isHome ? 'show-banner' : 'hide-banner');
  }, [navState]);

  return <BannerGrid bannerState={bannerState} />;
};


// The logic above will check for the specific "route path" instead of relying on the "navState" value.
