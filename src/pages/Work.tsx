import React, { FC, useEffect, useState } from 'react';
import { WorkExp } from '../shared/WorkExp';
import { WorkPanel } from '../components/WorkPanel';
import { workExpData } from '../data/workExpData';

interface Props {
  navState: string,
  setNavState: React.Dispatch<React.SetStateAction<string>>,
}

export const Work: FC<Props> = ({ navState, setNavState }) => {

  const [cardSelected, setCardSelected] = useState<string>('');

  return (
    <>
      <WorkExp navState={navState} setNavState={setNavState} setCardSelected={setCardSelected} />
      {cardSelected !== '' && <WorkPanel navState={navState} cardSelected={cardSelected} />}
    </>
  )
}
