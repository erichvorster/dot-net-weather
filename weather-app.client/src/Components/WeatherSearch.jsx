import React from 'react';
import { Button, InputGroup, FormControl, Spinner, Alert, Card } from 'react-bootstrap';
import refresh from '../assets/refresh.svg';
import search from '../assets/search.svg';

const WeatherSearch = ({ location, setLocation, getWeather, refreshWeather, loading, error, hasSearched }) => {
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            getWeather();
        }
    };

    return (
        <Card className="px-md-3">
            <Card.Body className="d-flex flex-column align-items-start ">
                <div className="d-flex flex-column align-items-start " style={{ width: '100%' }}>
               
                    <h3 className="me-5 mb-0 font-extra-bold">Location</h3>
                    <div className="d-flex align-items-center mb-3 mt-1" style={{ width: '100%' }}>
                        <InputGroup style={{width:'100%'}}>
                        <FormControl
                                placeholder="Enter location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                onKeyPress={handleKeyPress}
                                isInvalid={error !== null}
                                style={{ height: '45px' }}
                        />
                            <Button
                                variant="dark"
                                onClick={getWeather}
                                className="d-flex justify-content-center align-items-center"
                                
                            >
                                <span className="d-none d-md-inline-block mx-2">Get Weather</span>
                                <img src={search} className="d-md-none mx-2" alt="Search Icon" />
                                <span>{loading && <Spinner animation="border" style={{ height: '20px', width: '20px' }} />}</span>
                            </Button>

                       
                    </InputGroup>
                    {location && hasSearched && (
                        <Button
                            variant="dark"
                            onClick={refreshWeather}
                                className="d-flex justify-content-center align-items-center ms-2"
                                style={{ height: '45px', width:'45px' }}
                        >
                            <img src={refresh} alt="Refresh" style={{ height: '30px', width: '20px' }} />
                        </Button>
                       
                        )}
                    </div>
                    {error && <Alert variant="danger">{error}</Alert>}
                </div>
            </Card.Body>
        </Card>
    );
};

export default WeatherSearch;
