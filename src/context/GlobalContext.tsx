import { createContext, useState } from 'react';

export const initialContext = {
    mouseX: 0,
    updateMouseX: (newNumber: number) => {}
};

export const GlobalContext = createContext(initialContext);

interface ContextValue {
    mouseX: number;
    updateMouseX: (newNumber: number) => void;
}

export function ContextWrapper(props: { children: React.ReactNode }) {
    const [mouseX, setMouseX] = useState(initialContext.mouseX);

    function updateMouseX(newNumber: number) {
        setMouseX(newNumber);
    }

    const value: ContextValue = {
        mouseX,
        updateMouseX,
    };


    return (
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    );
}