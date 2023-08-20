import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ForecastOneDay } from '../types/ForecastOneDayType';
import { fetchCityForecast5Day } from '../services/weatherService';
import WeatherForecastOneDay from '../components/WeatherForecastOneDay';

export default function CityFiveDayForecast() {
    const { id } = useParams<{ id: string }>();
    const [weatherData, setWeatherData] = useState<ForecastOneDay | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data: ForecastOneDay = await fetchCityForecast5Day(id);
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
            {weatherData && < WeatherForecastOneDay data={weatherData} />}
        </div>
    )
}

