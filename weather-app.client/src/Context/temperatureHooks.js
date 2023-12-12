
import { useContext } from 'react';
import { TemperatureContext } from './TemperatureContext'; 

export const useTemperatureContext = () => {
    const context = useContext(TemperatureContext);
    if (!context) {
        throw new Error('useTemperatureContext must be used within a TemperatureProvider');
    }
    return context;
};
