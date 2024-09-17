import React, { FC, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { NavProvider } from './context/NavContext';
import { CardProvider } from './context/CardContext';

const Home = React.lazy( () => import('./pages/Home') );
const Work = React.lazy( () => import('./pages/Work') );
const Skills = React.lazy( () => import('./pages/Skills') );
const Projects = React.lazy( () => import('./pages/Projects') );
const Contact = React.lazy( () => import('./pages/Contact') );

import './index.css' // Global CSS Styles

export const CvApp: FC = () => {
  return (
    <NavProvider>
      <CardProvider>
        <NavBar />
        <Banner />
        <Suspense fallback={<div>Loading...</div>}>
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
