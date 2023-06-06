import React, { FC, useEffect, useState } from 'react';
import { BannerGrid } from '../layouts/BannerGrid';

interface Props {
  navState: string;
}

export const Banner: FC<Props> = ({ navState }) => {
  const [bannerState, setBannerState] = useState<string>('show-banner');

  useEffect(() => {
    navState === '/' ? setBannerState('show-banner') : setBannerState('hide-banner');
  }, [navState]);

  return <BannerGrid bannerState={bannerState} />;
};
