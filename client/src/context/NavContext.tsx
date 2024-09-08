import React, { createContext, useContext, useState, FC, ReactNode } from 'react';

interface NavContextProps {
  navState: string;
  setNavState: (state: string) => void;
}

const NavContext = createContext<NavContextProps | undefined>(undefined);

// Functional Component
export const NavProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [navState, setNavState] = useState<string>(window.location.pathname);

  return (
    <NavContext.Provider value={{ navState, setNavState }}>
      {children}
    </NavContext.Provider>
  );
};

// Custom Hook
export const useNavContext = (): NavContextProps => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error('useNavContext must be used within a NavProvider');
  }
  return context;
};