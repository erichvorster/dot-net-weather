
import React, { createContext, useState } from 'react';

export const TemperatureContext = createContext();

export const TemperatureProvider = ({ children }) => {
    const [isCelsius, setIsCelsius] = useState(true);

    const toggleTemperatureUnit = () => {
        setIsCelsius((prevIsCelsius) => !prevIsCelsius);
    };

    return (
        <TemperatureContext.Provider value={{ isCelsius, toggleTemperatureUnit }}>
            {children}
        </TemperatureContext.Provider>
    );
};
