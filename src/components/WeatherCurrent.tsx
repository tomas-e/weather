import React from 'react';
import styled from 'styled-components';
import { City } from '../types/CityType';
import { Link } from 'react-router-dom';
import { ForecastOneDay, Current } from '../types/ForecastOneDayType';

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-top: 0;
`;
type WeatherCardProps = {
    data?: Current []; // Pass the City type as a prop
};

const WeatherCurrent: React.FC<WeatherCardProps> = ({ data }) => {
  if (data) {
    return (
      <div> 
        {data?.map(item => (
        <Card>
     
        <div>
        </div>
        <div>{item.LocalObservationDateTime}</div>
   

        

  
    </Card>))}</div>
     
       
    );
  } else {
    return null; // or retu
  }

   
};

export default WeatherCurrent;
