import React, { FC, useEffect, useState } from 'react';
import { WorkExp } from '../shared/WorkExp';
import { WorkPanel } from '../components/WorkPanel';


interface Props {
  navState: string;
  setNavState: React.Dispatch<React.SetStateAction<string>>;
}

export const Work: FC<Props> = ({ navState, setNavState }) => {
  
  const [cardSelected, setCardSelected] = useState('');

  

  return (
    <>
      <WorkExp navState={navState} setNavState={setNavState} setCardSelected={setCardSelected} cardSelected={cardSelected} />
      {cardSelected !== '' && <WorkPanel navState={navState} cardSelected={cardSelected} />}
    </>
  );
};
