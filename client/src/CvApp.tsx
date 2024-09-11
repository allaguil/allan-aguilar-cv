import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

import './index.css' // Global CSS Styles
import { Banner } from './components/Banner';
import { NavProvider } from './context/NavContext';
import { CardProvider } from './context/CardContext';

export const CvApp: FC = () => {
  return (
    <NavProvider>
      <CardProvider>
        <NavBar />
        <Banner />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/work' element={<Work />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
      </CardProvider>
    </NavProvider>
  )
}