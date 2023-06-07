import { WorkExp } from '../components/WorkExp';
import React, { FC } from 'react';
import { WorkPanel } from '../components/WorkPanel';

interface Props {
  setNavState: React.Dispatch<React.SetStateAction<string>>;
}


export const Work: FC<Props> = ({ setNavState }) => {
  return (
    <>
      <WorkExp setNavState={setNavState} />
      <WorkPanel />
    </>
  )
}
