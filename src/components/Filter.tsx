import React, { ChangeEvent, useEffect, useState } from 'react';
import { City } from '../types/CityType';
import { Grid } from '@chakra-ui/react';
import WeatherCard from './WeatherCard';
type FilterProps = {
    data: City[] | null;
};

const Filter: React.FC<FilterProps> = ({ data }) => {
    const [selectedCountry, setSelectedCountry] = useState('All');
    const countries = ['All', 'South America', 'Europe', 'North America']; // List of available countries
    const [filteredData, setFilteredData] = useState<City[]>([]);
    const [regions, setRegions] = useState<string[]>(['All']); // Initialize with 'All'

    const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCountry(event.target.value);
    };
    useEffect(() => {
        if (data != null) {
            const uniqueRegions = Array.from(new Set(data.map(item => item.Region.LocalizedName)));
            setRegions(['All', ...uniqueRegions]);
        }
        console.log(data)

    }, [data]);
    useEffect(() => {
        if (data) {
            const filteredData = selectedCountry === 'All' ? data : data.filter(item => item.Region.LocalizedName === selectedCountry);
            console.log(filteredData)
            setFilteredData(filteredData);
        }
        

    }, [data, selectedCountry]);

    return (
        <div>
            <label htmlFor="countryFilter">Filter by Country:</label>
            <select id="countryFilter" value={selectedCountry} onChange={handleCountryChange}>
                {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                ))}
            </select>

            <h2>Filtered Data:</h2>
            <ul>
                <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                    {filteredData ? (
                        filteredData.map(city => <WeatherCard key={city.Key} data={city} />)
                    ) : (
                        <p>No data available.111111111111111</p>
                    )}

                </Grid>
            </ul>
        </div>
    );
};

export default Filter;
