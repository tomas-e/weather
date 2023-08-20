import React, { ChangeEvent, useEffect, useState } from 'react';
import { useFilterContext } from '../context/FilterContext';
import {  FilterContextProps } from '../context/FilterContext';
import { fetchRegions } from '../services/weatherService';
interface Region  {
    ID: string;
    LocalizedName: string;
    EnglishName: string;
  };
  
const FilterComponent = () => {
  const { selectedCountry, setSelectedCountry } = useFilterContext() as FilterContextProps;
  const [ regions, setRegions ] = useState<Region[] | null>(null);

  const handleCountryChange = (event:ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };
  useEffect(()=>{
    const fetchData = async ()=>{
        try {
           
            const data: Region[] = await fetchRegions();
            console.log(data)
            setRegions(data);
            

        }
        catch (error) {
            console.log(error)
        }
        
    }
    fetchData();
   }, [])
        
  return (
    <div>
      <label htmlFor="countryFilter">Filter by Country:</label>
      <select id="countryFilter" value={selectedCountry} onChange={handleCountryChange}>
      
        <option  value="All">All</option>
        {regions && regions.map((region, index) => (
                    <option key={index} value={region.LocalizedName}>{region.LocalizedName}</option>
                ))}
      </select>
    </div>
  );
};

export default FilterComponent;
