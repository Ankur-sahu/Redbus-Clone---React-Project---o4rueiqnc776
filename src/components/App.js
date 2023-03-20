import React from 'react'
import '../styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import BusList from './booking/BusList';
import Nav from './layouts/Nav';
import NotFound from './general/NotFound';
import PrintTicket from './booking/PrintTicket';
import Fake_footer from './layouts/Fake_footer';
import Footer from './layouts/Footer';


const App = () => {


  return (

    <BrowserRouter>
        <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bus-tickets' element={<BusList />} /> 
        <Route path='/booked-ticket' element={<PrintTicket />} /> 
        <Route path='/*' element={<NotFound />} /> 



      </Routes>
      <Fake_footer/>
      <Footer />
    </BrowserRouter>
  )
}


export default App;
