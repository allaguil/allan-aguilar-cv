import { Welcome } from '../components/Welcome';
import { WorkExp } from '../shared/WorkExp';
import { FC, useState } from 'react';
import { SkillSet } from '../shared/SkillSet';
import { ProjectsList } from '../shared/ProjectsList';

export const Home: FC = () => {
  const [cardSelected, setCardSelected] = useState('');
  return (
    <>
    {/* <Welcome /> */}
    <WorkExp cardSelected={cardSelected} setCardSelected={setCardSelected} />
    <SkillSet />
    <ProjectsList />
    </>
  )
}
