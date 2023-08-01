import { NavContext } from './NavContext';

const navTest = {
    tab: 1,
    name: 'HomePage',
}


export const NavProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NavContext.Provider value={{ hola: 'Mundo', navTest: navTest }}>
        { children }
    </NavContext.Provider>
  )
}
