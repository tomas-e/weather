import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';


export type FilterContextProps = {
    selectedCountry: string;
    setSelectedCountry: Dispatch<SetStateAction<string>>;
  };

  const FilterContext = createContext<FilterContextProps | undefined>(undefined);

type FilterProviderProps = {
    children: ReactNode;
    // Other props specific to your component
};
export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState('All');

  return (
    <FilterContext.Provider value={{ selectedCountry, setSelectedCountry }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
    const context = useContext(FilterContext);
    if (!context) {
      throw new Error("useFilterContext must be used within a FilterProvider");
    }
    return context;
  };