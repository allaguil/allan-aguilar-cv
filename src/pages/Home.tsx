import { Box, Container, Typography } from '@mui/material';
import { textAlign } from '@mui/system';
import { Welcome } from '../components/Welcome';
import { WorkExp } from '../components/WorkExp';
import React, { FC } from 'react';

interface Props {
  setNavState: React.Dispatch<React.SetStateAction<string>>;
}

React
export const Home: FC<Props> = ({ setNavState }) => {

  return (
    <>
    <Welcome />
    <WorkExp setNavState={ setNavState } />
    </>
  )
}
