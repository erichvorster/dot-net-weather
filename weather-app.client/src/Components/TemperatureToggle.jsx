
import React from 'react';
import { Button } from 'react-bootstrap';
import { useTemperatureContext } from '../Context/temperatureHooks';

const TemperatureToggle = () => {
    const { isCelsius, toggleTemperatureUnit } = useTemperatureContext();

    return (
        <div className="mb-2">
            <Button
                variant={isCelsius ? 'dark' : 'outline-dark'}
                onClick={toggleTemperatureUnit}
                className="radius-r-none"
                style={{width:'50px'}}
            >
                <strong>&deg;C</strong>
            </Button>
            <Button
                variant={!isCelsius ? 'dark' : 'outline-dark'}
                onClick={toggleTemperatureUnit}
                className="radius-l-none "
                style={{ width: '50px' }}
            >
                <strong>&deg;F</strong>
            </Button>
        </div>
    );
};

export default TemperatureToggle;
