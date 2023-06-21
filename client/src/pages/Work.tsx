import React, { FC, useEffect, useState } from 'react';
import { WorkExp } from '../shared/WorkExp';
import { WorkPanel } from '../components/WorkPanel';
// import { workExpData } from '../data/workExpData';

interface Props {
  navState: string;
  setNavState: React.Dispatch<React.SetStateAction<string>>;
}

export const Work: FC<Props> = ({ navState, setNavState }) => {
  const [data, setData] = useState<object | null>(null);
  const [cardSelected, setCardSelected] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>

      <div>
        {/* Render your component using the fetched data */}
        {data && <p>{JSON.stringify(data)}</p>}
      </div>


      <WorkExp navState={navState} setNavState={setNavState} setCardSelected={setCardSelected} />
      {cardSelected !== '' && <WorkPanel navState={navState} cardSelected={cardSelected} />}
    </>
  );
};
