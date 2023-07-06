import { Box, Container, Typography } from '@mui/material';
import { textAlign } from '@mui/system';
import { Welcome } from '../components/Welcome';
import { WorkExp } from '../shared/WorkExp';
import React, { FC, SetStateAction, useState } from 'react';
import { SkillSet } from '../shared/SkillSet';
import { ProjectsList } from '../shared/ProjectsList';

interface Props {
  setNavState: React.Dispatch<React.SetStateAction<string>>;
}

React
export const Home: FC<Props> = ({ setNavState }) => {

  const [cardSelected, setCardSelected] = useState('');

  return (
    <>
    <Welcome />
    <WorkExp setNavState={setNavState} navState={''} cardSelected={cardSelected} setCardSelected={setCardSelected} />
    <SkillSet />
    <ProjectsList />
    </>
  )
}
