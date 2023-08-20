import React from 'react';
import styled from 'styled-components';
import { City } from '../types/CityType';
import { Box, Card, CardBody, CardHeader, Center, Heading, Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react'


type WeatherCardProps = {
  data: City; // Pass the City type as a prop
};

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  const { Key, LocalizedName, Country, Region }: City = data;

  return (
    <Card variant="outline"  bg='gray.100'>

      <CardHeader>
        <Heading size='md'>{LocalizedName}</Heading>
      </CardHeader>
      <CardBody>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Summary
          </Heading>
          <Text pt='2' fontSize='md'>
          {Region.LocalizedName}
          </Text>
          <Text pt='2' fontSize='sm'>
          {Country.LocalizedName}
          </Text>
          
        </Box>

        <Link color='blue.500' href={`/city/${Key}?city=${encodeURIComponent(LocalizedName)}`}>{LocalizedName}</Link>


      </CardBody>
    </Card>
  );
};

export default WeatherCard;
