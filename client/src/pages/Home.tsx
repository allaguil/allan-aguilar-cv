import { Box, Container, Typography } from '@mui/material';
import { textAlign } from '@mui/system';
import { Welcome } from '../components/Welcome';
import { WorkExp } from '../shared/WorkExp';
import React, { FC, SetStateAction } from 'react';

interface Props {
  setNavState: React.Dispatch<React.SetStateAction<string>>;
}

React
export const Home: FC<Props> = ({ setNavState }) => {

  return (
    <>
    <Welcome />
    <WorkExp setNavState={setNavState} navState={''} setCardSelected={function (value: SetStateAction<string>): void {
        throw new Error('Function not implemented.');
      } } />
    </>
  )
}
