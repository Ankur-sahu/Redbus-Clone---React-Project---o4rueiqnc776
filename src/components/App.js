import React from 'react'
import '../styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import BusList from './booking/BusList';
import Nav from './layouts/Nav';


const App = () => {


  return (

    <BrowserRouter>
        <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bus-tickets' element={<BusList />} /> 

      </Routes>
    </BrowserRouter>
  )
}


export default App;
