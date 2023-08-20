import React from 'react';
import styled from 'styled-components';
import { City } from '../types/CityType';
import { Link } from 'react-router-dom';
import { ForecastOneDay } from '../types/ForecastOneDayType';

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
    data?: ForecastOneDay; // Pass the City type as a prop
};

const WeatherForecastOneDay: React.FC<WeatherCardProps> = ({ data }) => {
  if (data) {
    const { DailyForecasts }: ForecastOneDay = data;
    return (
      <div> 
        {DailyForecasts?.map(item => (
        <Card>
        <Title>{}</Title>
        <div>
        </div>
        <div>{item.Date}</div>
        <div>{item.Temperature.Minimum.Value}</div>
        <div>{item.Temperature.Maximum.Value}</div>
        <a href={`${item.Link}`}>Ir</a>

        

  
    </Card>))}</div>
     
       
    );
  } else {
    return null; // or retu
  }

   
};

export default WeatherForecastOneDay;
