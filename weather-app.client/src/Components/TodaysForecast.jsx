import React, { useState, useRef, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import TemperatureToggle from '../Components/TemperatureToggle';
import {useTemperatureContext} from '../Context/temperatureHooks'; 

const TodaysForecast = ({ weatherData }) => {
    
    const [scrollPosition, setScrollPosition] = useState(-1);
    const scrollContainerRef = useRef(null);
    const { isCelsius } = useTemperatureContext();

    const handleScroll = () => {
        setScrollPosition(scrollContainerRef.current.scrollLeft);
    };

    const handleScrollButtonClick = (direction) => {
        const scrollAmount = direction === 'left' ? -300 : 300;
        scrollContainerRef.current.scrollLeft += scrollAmount;
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        container.addEventListener('scroll', handleScroll);
        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);

  
    function extractHourFromDate(dateString) {
        const dateObject = new Date(dateString);
        const hour = dateObject.getHours();
        const formattedHour = hour.toString().padStart(2, '0');
        return formattedHour;
    }

    const maxScrollLeft =
        scrollContainerRef.current &&
        scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;

    return (
        <Card className="px-md-3 mt-2" >
            <Card.Body >
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start">
                    <div className="d-flex flex-column align-items-start">
                        <h5 className="mb-1">Todays Forecast </h5>
                        <small>{weatherData.forecast.forecastday[0].day.condition.text}</small>
                    </div>

                    <div className="mt-3 mt-md-0">
                        <TemperatureToggle/>
                     </div>
                </div>
                
                <div className="d-flex mt-2 border rounded  " style={{
                    position: 'relative'
                }}>
                    <button
                        onClick={() => handleScrollButtonClick('left')}
                        disabled={scrollPosition === 0}
                        className="btn btn-dark  d-none d-md-block radius-r-none "
                        style={{
                            width: '52px',                        }}
                       
                    >
                        &lt;
                    </button>
                   
                    <div className="d-flex py-3 px-5" style={{ overflowX: 'auto', scrollBehavior: 'smooth' }} ref={scrollContainerRef}>
                        <div className="gradient-left"                       / >
                        {weatherData.forecast.forecastday[0].hour.map((hour, index) => (
                            <>
                             
                                <div key={index} className="d-flex flex-column justify-content-center align-items-center" style={{minWidth:'70px'}}>
                                        <small className="m-0">{extractHourFromDate(hour.time)}</small>
                                        <img src={hour.condition.icon} style={{ height: '40px', width: '40px' }} className=" my-2" alt="Weather Icon" />
                                        <strong className="m-0">{isCelsius ? hour.temp_C : hour.temp_F}&deg;</strong>
                                </div>
                   
                            </>
                        ))}
                        <div className="gradient-right" />
                      
                    </div>
                    <button
                        onClick={() => handleScrollButtonClick('right')}
                        disabled={scrollPosition >= maxScrollLeft}
                        className="btn btn-dark  d-none d-md-block radius-l-none "
                        style={{ width: '52px' }}
                    >
                        &gt;
                    </button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default TodaysForecast;
