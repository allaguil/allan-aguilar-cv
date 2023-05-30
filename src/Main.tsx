import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { CvApp } from './CvApp';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CvApp />
    </BrowserRouter>
  </React.StrictMode>
)


// BrowserRouter = This is the 1st step to configure the Routes in React Router, we need to wrap the entire Application with this "BrowserRouter" Component.