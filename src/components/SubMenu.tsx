import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useCityData } from '../context/CityDataContext';

const Submenu = () => {
    const context = useCityData();
    if (!context) {
    throw new Error("useCityData must be used within a CityDataProvider");
    }
    const { cityData } = context;
  return (
    <div>
      <Link to={`/city/forecast/current/${cityData}`}>Current Conditions</Link>

      <Link to={`/city/forecast/1day/${cityData}`}>1-Day Forecast</Link>
      <Link to={`/city/forecast/5day/${cityData}`}>5-Day Forecast</Link>
      <Outlet />
    </div>
  );
};

export default Submenu;
