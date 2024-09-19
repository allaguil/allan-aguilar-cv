import React, { Suspense, useState, useEffect } from 'react';
import { CircularProgress, Box } from '@mui/material';

const withDelay = (Component: React.LazyExoticComponent<React.FC>, delay: number) => {
  return (props: any) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setShow(true), delay);
      return () => clearTimeout(timer);
    }, [delay]);

    return (
      <Suspense fallback={
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </Box>
      }>
        {show ? <Component {...props} /> : 
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress />
          </Box>
        }
      </Suspense>
    );
  };
};

export default withDelay;