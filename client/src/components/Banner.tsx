import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BannerGrid } from '../layouts/BannerGrid';

interface Props {
  navState: string;
}

export const Banner: FC<Props> = ({ navState }) => {
  const [bannerState, setBannerState] = useState<string>('show-banner');
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    const isHome = pathname === '/';

    setBannerState(isHome ? 'show-banner' : 'hide-banner');
  }, [location]);

  return <BannerGrid bannerState={bannerState} />;
};


// The logic above will check for the specific "route path" instead of relying on the "navState" value.
