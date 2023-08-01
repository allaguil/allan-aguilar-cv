import { createContext } from "react";

interface NavContextValue {
    hola: string;
    navTest: {
      tab: number;
      name: string;
    };
  }

export const NavContext = createContext<NavContextValue | null>(null);
