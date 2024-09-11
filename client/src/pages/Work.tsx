import { FC, useState } from 'react';
import { WorkExp } from '../shared/WorkExp';
import { WorkPanel } from '../components/WorkPanel';
import { useNavContext } from '../context/NavContext';
import { useCardContext } from '../context/CardContext';

export const Work: FC = () => {
  const { navState } = useNavContext();
  const { cardSelected } = useCardContext();

  return (
    <>
      <WorkExp />
      {cardSelected !== '' && <WorkPanel />}
    </>
  );
};
