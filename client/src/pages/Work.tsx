import React, { FC, useState } from 'react';
import { WorkExp } from '../shared/WorkExp';
import { WorkPanel } from '../components/WorkPanel';
import { useNavContext } from '../context/NavContext';

export const Work: FC = () => {
  const { navState, setNavState } = useNavContext();
  const [cardSelected, setCardSelected] = useState('');

  return (
    <>
      <WorkExp setCardSelected={setCardSelected} cardSelected={cardSelected} />
      {cardSelected !== '' && <WorkPanel navState={navState} cardSelected={cardSelected} />}
    </>
  );
};
