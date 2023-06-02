import { Box, Container, Typography } from '@mui/material';
import { textAlign } from '@mui/system';
import { Welcome } from '../components/Welcome';
import { WorkExp } from '../components/WorkExp';


export const Home: React.FC = () => {

  return (
    <>
    <Welcome />
    <WorkExp />
    </>
  )
}
