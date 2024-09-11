import { createContext, useContext, useState, FC, ReactNode } from 'react';

interface CardContextProps {
    cardSelected: string;
    setCardSelected: (state: string) => void;
}

const cardContext = createContext<CardContextProps | undefined>(undefined);

// Custom Hook
export const useCardContext = () => {
    const context = useContext(cardContext);
    if(!context) {
        throw new Error('useCardContext must be used within a CardProvider');
    }
    return context;
}

// Functional Component
export const CardProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [cardSelected, setCardSelected] = useState<string>('');

    return (
        <cardContext.Provider value={{ cardSelected, setCardSelected }}>
            { children }
        </cardContext.Provider>
    );

}

