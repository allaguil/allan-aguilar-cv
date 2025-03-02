import { WorkExp } from '../shared/WorkExp';
import { FC } from 'react';
import { SkillSet } from '../shared/SkillSet';
import { ProjectsList } from '../shared/ProjectsList';

const Home: FC = () => {
  return (
    <>
        <WorkExp />
        {/* <SkillSet /> */}
        <ProjectsList />
    </>
  )
}

export default Home;
