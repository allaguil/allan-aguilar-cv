import { FC, useEffect, useState } from 'react';
import { BannerGrid } from '../layouts/BannerGrid';
import { useNavContext } from '../context/NavContext';

export const Banner: FC = () => {
  const { navState } = useNavContext();
  const [bannerState, setBannerState] = useState<string>('show-banner');

  useEffect(() => {
    const isHome = navState === '/';
    setBannerState(isHome ? 'show-banner' : 'hide-banner');
  }, [navState]);

  return <BannerGrid bannerState={bannerState} />;
};