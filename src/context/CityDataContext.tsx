import { ReactNode, createContext, useContext, useState } from 'react';
type CityDataProviderProps = {
    children: ReactNode;
  };
  type CityDataContextValue = {
    cityData: string; // Adjust the type according to your data structure
    setCityData: React.Dispatch<string>; // Adjust the type according to the setter function
  };
const CityDataContext = createContext<CityDataContextValue | null>(null);

export function useCityData() {
  return useContext(CityDataContext);
}

export function CityDataProvider({ children }:CityDataProviderProps) {
  const [cityData, setCityData] = useState<string >("");

  return (
    <CityDataContext.Provider value={{ cityData, setCityData }}>
      {children}
    </CityDataContext.Provider>
  );
}
