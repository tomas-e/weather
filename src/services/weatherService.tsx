const API_KEY = 'A420KAEjnw0aXzWt2r3wqUekMxshyiZZ';
const API_URL =`http://dataservice.accuweather.com`
export const fetchWeather = async (cityName:string) => { 
    
    try {
    const response = await fetch(`${API_URL}//locations/v1/cities/search?q=${cityName}&apikey=${API_KEY}`);
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
};

export const fetchCityWeather = async (key:string|undefined) => { 
    if(key != null){
      try {
        const response = await fetch(`${API_URL}/forecasts/v1/daily/1day/${key}?apikey=${API_KEY}&metric=true`);
        const data = await response.json();
        console.log(data)
        return data;
      } catch (error) {
        throw new Error('Failed to fetch weather data1');
      }
    }
    
};
export const fetchCityCurrent = async (key:string|undefined) => { 
  if(key != null){
    try {
      const response = await fetch(`${API_URL}/currentconditions/v1/${key}?apikey=${API_KEY}`);
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  }
  
};
export const fetchCityForecast5Day = async (key:string|undefined) => { 
  if(key != null){
    try {
      const response = await fetch(`${API_URL}/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}&metric=true`);
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      throw new Error('Failed to fetch weather data1');
    }
  }
  
};
export const fetchRegions = async () => { 
    
  try {
  const response = await fetch(`${API_URL}/locations/v1/regions?apikey=${API_KEY}`);
  const data = await response.json();
  console.log(data)
  return data;
} catch (error) {
  throw new Error('Failed to fetch weather data');
}
};