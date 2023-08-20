

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CityOneDayForecast from './pages/CityOneDayForecast';
import SubMenu from './components/SubMenu';
import { CityDataProvider } from './context/CityDataContext';
import ErrorPage from './pages/Error';

import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import { FilterProvider } from './context/FilterContext';
import CityFiveDayForecast from './pages/CityFiveDayForecast';
import NotFound from './pages/NotFound';
import CurrentForecast from './pages/CurrentForecast';

function App() {
  return (
    <div className="App">
          <FilterProvider>

          <ChakraProvider>
          <Navbar />
        <CityDataProvider>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />


        
            <Route path="/city" element={<SubMenu />}>
              <Route path=":id" element={<CityOneDayForecast />} />
              <Route path="forecast/current/:id" element={<CurrentForecast />} />

              <Route path="forecast/1day/:id" element={<CityOneDayForecast />} />

              <Route path="forecast/5day/:id" element={<CityFiveDayForecast />} />
            </Route>

            <Route path="/error" element={<ErrorPage error={new Error("An unexpected error occurred!")} />} />
            <Route path="*" element={<NotFound />} /> {/* Default route for not found */}

        </Routes>
      </BrowserRouter>
      </CityDataProvider>
      </ChakraProvider>
      </FilterProvider>


    </div>
  );
}

export default App;
