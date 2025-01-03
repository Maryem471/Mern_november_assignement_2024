import React, { createContext, useState } from 'react';

// Create a context for the name state
export const NameContext = createContext();

// Provider component to wrap the application
export const NameProvider = ({ children }) => {
    const [name, setName] = useState("Guest");

    return (
        <NameContext.Provider value={{ name, setName }}>
            {children}
        </NameContext.Provider>
    );
};
