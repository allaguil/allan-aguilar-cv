import { FC, useState } from 'react';
import { WorkExp } from '../shared/WorkExp';
import { WorkPanel } from '../components/WorkPanel';
import { useCardContext } from '../context/CardContext';

const Work: FC = () => {
  const { cardSelected } = useCardContext();

  return (
    <>
      <WorkExp />
      {cardSelected !== '' && <WorkPanel />}
    </>
  );
};

export default Work;
