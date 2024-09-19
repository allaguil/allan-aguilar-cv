import React, { FC, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';

import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { NavProvider } from './context/NavContext';
import { CardProvider } from './context/CardContext';
import withDelay from './utils/withDelay';

const Home = withDelay(React.lazy(() => import('./pages/Home')), 2000);
const Work = withDelay(React.lazy(() => import('./pages/Work')), 2000);
const Skills = withDelay(React.lazy(() => import('./pages/Skills')), 2000);
const Projects = withDelay(React.lazy(() => import('./pages/Projects')), 2000);
const Contact = withDelay(React.lazy(() => import('./pages/Contact')), 2000);

import './index.css' // Global CSS Styles

export const CvApp: FC = () => {
  return (
    <NavProvider>
      <CardProvider>
        <NavBar />
        <Banner />
        <Suspense fallback={<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </Box>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/work' element={<Work />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/*' element={<Navigate to='/' />} />
          </Routes>
        </Suspense>
      </CardProvider>
    </NavProvider>
  );
};
