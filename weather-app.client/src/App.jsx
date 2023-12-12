
import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './App.css';
import WeatherSearch from './Components/WeatherSearch';
import CurrentWeather from '../src/Components/CurrentWeather';
import UpcommingWeather from '../src/Components/UpcommingWeather';
import TodaysForecast from '../src/Components/TodaysForecast';
import axios from 'axios';

function App() {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [hasSearched, setHasSearched] = useState(false);

    useEffect(() => {
        console.log("Here is the weather data:", weatherData);
    }, [weatherData]);

    const getWeather = async () => {
        try {
            if (!location.trim()) {
                setError('Please enter a location.');
                return;
            }

            setLoading(true);
            setHasSearched(true);
            setError(null); 
            const response = await axios.get('http://localhost:5050/api/weather/getWeather?location=' + location);
          
            setWeatherData(response.data);
        } catch (error) {
            setError(error.response?.data ?? 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    const refreshWeather = async () => {
        try {
            if (!location.trim()) {
                setError('Please enter a location.');
                return;
            }

            setLoading(true);

            const refreshedLocation = location.trim();
            setLocation(refreshedLocation);

            const response = await axios.get('http://localhost:5050/api/weather/getWeather?location=' + refreshedLocation);
      
            setWeatherData(response.data);
            setHasSearched(true);
           
        } catch (error) {
            setError(error.response?.data ?? 'An error occurred');
        } finally {
            setLoading(false);
        }
    };



    return (
        <div>
            <WeatherSearch
                location={location}
                setLocation={setLocation}
                getWeather={getWeather}
                refreshWeather={refreshWeather}
                loading={loading}
                error={error}
                hasSearched={hasSearched}
            />
            {weatherData ? (
                <>

                    <Row>
                        <Col>
                            <TodaysForecast weatherData={weatherData} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={8} className="my-2 mx-0">
                            <CurrentWeather weatherData={weatherData} />
                        </Col>
                        <Col xs={12} md={4} className="my-2">
                            <Row>
                                <Col className="mb-2">
                                    <UpcommingWeather weatherData={weatherData} forecastDay={1} header="Tomorrow" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <UpcommingWeather weatherData={weatherData} forecastDay={2} header="Day after" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </>) :
                <Card className="mt-2" >
                    <Card.Body>
                        <div className="py-5 my-5">
                            <h5>Welcome to the weather app!</h5>
                            <small>Enter a location above to check the weather 📍</small>
                        </div>
                    </Card.Body>
                </Card>
            }
        </div>
    );
}

export default App;
