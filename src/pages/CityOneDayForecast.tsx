import React, { useEffect, useState } from 'react'
import { fetchCityWeather } from '../services/weatherService';
import { useParams, Outlet, Link } from 'react-router-dom';
import { City } from '../types/CityType';
import { ForecastOneDay } from '../types/ForecastOneDayType';
import { useLocation } from 'react-router-dom';
import WeatherForecastOneDay from '../components/WeatherForecastOneDay';
import Submenu from '../components/SubMenu';
import { useCityData } from '../context/CityDataContext';
import { Stack } from '@chakra-ui/react';
import { useFilterContext } from '../context/FilterContext';

export default function CityOneDayForecast() {
    const context = useCityData();
    if (!context) {
    throw new Error("useCityData must be used within a CityDataProvider");
    }

    const { setCityData } = context;
    const { selectedCountry } = useFilterContext();

    const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const cityName = searchParams.get('city');
    const [weatherData, setWeatherData] = useState<ForecastOneDay | null>(null);
    const [loading, setLoading] = useState(false); 


   useEffect(()=>{
    const fetchData = async ()=>{
        try {
            setLoading(true);
            const data: ForecastOneDay = await fetchCityWeather(id);
            console.log(data)
            setWeatherData(data);
            if(id != null)
            setCityData(id);

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
  

      {weatherData &&< WeatherForecastOneDay data={weatherData} />}
   
      </div> 
        
       
  )
}
