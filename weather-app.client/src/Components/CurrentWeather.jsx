import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import formatEpochDate from '../helpers';
import { useTemperatureContext } from '../Context/temperatureHooks'; 

const CurrentWeather = ({ weatherData }) => {
const { isCelsius } = useTemperatureContext();
   

    return (
        <Card className="px-md-3" style={{ height: '100%' }}>
            <Card.Body>
                <div className="d-flex flex-column flex-xl-row pb-2 align-items-start justify-content-between">
                    <h5 className="m-0 p-0  ">Current</h5>
                    <p className="m-0 p-0  "><small>{formatEpochDate(weatherData.current.last_Updated_Epoch)}</small></p>
                </div>
                <hr className="mt-0 mb-5" />
                <div>
                    
                    {isCelsius
                        ? <h1 className="font-extra-bold">{weatherData.current.temp_C} &deg;C  </h1>
                        : <h1 className="font-extra-bold">{weatherData.current.temp_F} &deg;F  </h1>
                    }
                    <img src={weatherData.current.condition.icon} style={{ height: '60px', width: 'auto' }} alt="Weather Icon" />
                    <p>{weatherData.current.condition.text}</p>
                </div>
                <div>
                    <Row className="my-5">
                        <Col xs={12} md={6} style={{borderRight:'1px solid lightGray'} }>
                            <div className="d-flex flex-column align-items-center mb-3">
                                <small className="mb-2">
                                    RealFeel
                                </small>
                               
                                {isCelsius
                                    ? <h5 className="font-extra-bold">{weatherData.current.feelslike_C} &deg;C  </h5>
                                    : <h5 className="font-extra-bold">{weatherData.current.feelslike_F} &deg;F  </h5>
                                }
                            </div>
                            <div className="d-flex flex-column align-items-center mb-3">
                                <small className="mb-2">
                                    Humidity
                                </small>
                                <h5 className="font-extra-bold">{weatherData.current.humidity}</h5>
                            </div>
                        </Col>
                       
                        <Col xs={12} md={6}>
                            <div className="d-flex flex-column align-items-center mb-3">
                                <small className="mb-2">
                                    uv Index
                                </small>
                                <h5 className="font-extra-bold">{weatherData.current.uv}</h5>
                            </div>
                            <div className="d-flex flex-column align-items-center mb-3">
                                <small className="mb-2">
                                    Wind 
                                </small>
                                <h5 className="font-extra-bold">{weatherData.current.wind_Kph} km/h</h5>
                            </div>
                        </Col>
                    </Row>

                </div>
            </Card.Body>
         </Card>
    );
};

export default CurrentWeather;
