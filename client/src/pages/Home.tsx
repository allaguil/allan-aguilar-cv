import { Box, Container, Typography } from '@mui/material';
import { textAlign } from '@mui/system';
import { Welcome } from '../components/Welcome';
import { WorkExp } from '../shared/WorkExp';
import React, { FC, SetStateAction, useState } from 'react';
import { SkillSet } from '../shared/SkillSet';
import { ProjectsList } from '../shared/ProjectsList';
import { useNavContext } from '../context/NavContext';

interface Props {
  setNavState: React.Dispatch<React.SetStateAction<string>>;
}

export const Home: FC = () => {
  const { setNavState } = useNavContext();

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
