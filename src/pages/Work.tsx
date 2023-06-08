import { WorkExp } from '../components/WorkExp';
import React, { FC, useEffect } from 'react';
import { WorkPanel } from '../components/WorkPanel';

interface Props {
  navState: string,
  setNavState: React.Dispatch<React.SetStateAction<string>>,
}


export const Work: FC<Props> = ({ navState, setNavState }) => {
  return (
    <>
      <WorkExp navState={navState} setNavState={setNavState} />
      <WorkPanel navState={navState} />
    </>
  )
}
