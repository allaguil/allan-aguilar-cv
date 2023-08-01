import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { NavBar } from './components/NavBar';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';
import { Work } from './pages/Work';

import './index.css' // Global CSS Styles
import { useState } from 'react';
import { Banner } from './components/Banner';
import { NavProvider } from './context/NavProvider';

export const CvApp: FC = () => {

  const currentPath: string = window.location.pathname;
  const [navState, setNavState] = useState<string>(currentPath); // Which Menu anchor was clicked, ex: /work

  return (
    <NavProvider>
      <NavBar setNavState={ setNavState } />
      <Banner navState={navState} />
      
      <Routes>
        <Route path='/' element={<Home setNavState={setNavState} />} />
        <Route path='/work' element={<Work navState={navState} setNavState={setNavState} />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />

        <Route path='/*' element={<Navigate to='/' /> } />

        {/* <Route path='/*' element={<Home setNavState={setNavState} />} /> */}
        {/* Para enviar al usuario al HomePage si intenta ingresar a una ruta que NO existe! */}
      </Routes>
    </NavProvider>
  )
}

// "Routes" Configuration: import "Routes" and "Route" Components
// Now we need to tell what is the "element" that will be rendered when the URL matches the "path" Route