import React from 'react';
import Card from 'react-bootstrap/Card';
import formatEpochDate from '../helpers';
import { useTemperatureContext } from '../Context/temperatureHooks';

const UpcomingWeather = ({ weatherData, forecastDay, header }) => {
  

    const { isCelsius } = useTemperatureContext();
    const forecastData = weatherData.forecast.forecastday[forecastDay];

    return (
        <Card className="px-md-3" >
            <Card.Body>
                <div className="d-flex flex-column flex-xl-row pb-2 align-items-start justify-content-between">
                    <h5 className="m-0 p-0">{header}</h5>
                    <p className="m-0 p-0">
                        <small>{formatEpochDate(forecastData.hour[1].time_epoch)}</small>
                    </p>
                </div>
                <hr className="mt-0 mb-5" />
                <div>
                    {isCelsius ? (
                        <h3 className="font-extra-bold">{forecastData.day.maxtemp_C} &deg;C</h3>
                    ) : (
                        <h3 className="font-extra-bold">{forecastData.day.maxtemp_F} &deg;F</h3>
                    )}

                    <img src={forecastData.day.condition.icon} alt="Weather Icon" />
                    <p>
                        <small>{forecastData.day.condition.text}</small>
                    </p>
                </div>
            </Card.Body>
        </Card>
    );
};

export default UpcomingWeather;
