import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Current, ForecastOneDay } from '../types/ForecastOneDayType';
import { fetchCityCurrent, fetchCityForecast5Day } from '../services/weatherService';
import WeatherForecastOneDay from '../components/WeatherForecastOneDay';
import WeatherCurrent from '../components/WeatherCurrent';

export default function CurrentForecast() {
    const { id } = useParams<{ id: string }>();
    const [weatherData, setWeatherData] = useState<Current [] | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data: Current[] = await fetchCityCurrent(id);
                console.log(data)

                setWeatherData(data);


            }
            catch (error) {
                console.log(error)
            }
            finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [id])
    return (
        <div>
            {weatherData && < WeatherCurrent data={weatherData} />}
        </div>
    )
}

