import React, { useCallback, useEffect, useState } from 'react';
import SearchForm from '../components/SearchForm';
import Header from '../components/Header';
import WeatherCard from '../components/WeatherCard';
import { fetchWeather } from '../services/weatherService';
import { City } from '../types/CityType';
import { Circles } from 'react-loader-spinner';
import ErrorPage from './Error';
import { Grid, Stack } from '@chakra-ui/react';
import Filter from '../components/Filter';
import { useFilterContext } from '../context/FilterContext';
import FilterComponent from '../components/FilterWithContext';


function Home() {
    const [weatherData, setWeatherData] = useState<City[] | null>(null);
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState<Error | null>(null); 
    const { selectedCountry } = useFilterContext();
    const [currentSearchQuery, setCurrentSearchQuery] = useState('');


    
    const handleSearch = useCallback(async (cityName: string) => {
        try {
            setLoading(true);
            setCurrentSearchQuery(cityName)
            const data: City[] = await fetchWeather(cityName);
            let filteredData;
            if(data != null){
             filteredData = selectedCountry === 'All' ? data : data.filter(item => item.Region.LocalizedName === selectedCountry);
            console.log(filteredData)
            setWeatherData(filteredData);
            }
        }
        catch (error) {
            console.log(error)
            setError(error as Error); 

        }
        finally {
            setLoading(false)
        }
    }, [setWeatherData, setCurrentSearchQuery, selectedCountry]);
    useEffect(() => {
        handleSearch(currentSearchQuery); // assuming you also maintain the current search query in state
    }, [selectedCountry, currentSearchQuery, handleSearch]);
    if(error){
        return <ErrorPage error={error as Error} />;

    }

    
    return (
        <div>
            <Header />
            <SearchForm onSearch={handleSearch} />
            <FilterComponent />
            {loading ? <Circles
                            height="80"
                            width="80"
                            color="#4fa94d"
                            ariaLabel="circles-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                        
                        :   weatherData ? weatherData.map(item => (
                            <WeatherCard data={item}></WeatherCard>
                          )) : null }
                        
                          
           

        </div>
    );
}

export default Home;