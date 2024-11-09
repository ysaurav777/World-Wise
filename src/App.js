import React, { useEffect, useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Pricing from './Pages/Pricing';
import PageNotFound from './Pages/PageNotFound';
import AppLayout from './Pages/AppLayout';
import Login from './Pages/Login';
import CityList from './Components/CityList';
import CountryList from './Components/CountryList';
import City from './Components/City';
import Form from './Components/Form';

const URL="http://localhost:9000";

function App() {
  const [cities,setCities]=useState([])
  const [isLoading,setIsLoading]=useState(false)

  useEffect(function(){
  async function fetchCities() {
    try {
      setIsLoading(true);
      const res=await fetch(`${URL}/cities`);
      const data= await res.json();
      setCities(data);
    }
    catch {
      alert("Data load failed");
    }
    finally {
      setIsLoading(false);
    }
  }
  fetchCities();
  },[]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path='pricing' element={<Pricing/>}/>
        <Route path='app' element={<AppLayout/>}>
          
          <Route path='cities/:id' element={<City/>} />
          <Route path='cities' element={<CityList cities={cities} isLoading={isLoading}/>}/>
          <Route path='countries' element={<CountryList cities={cities} isLoading={isLoading}/>}/>
          <Route path='form' element={<Form/>}/>
        </Route>
        <Route path='login' element={<Login/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

//<Route index element={<CityList cities={cities} isLoading={isLoading}/>}/> Not much valid to use as a index route
export default App