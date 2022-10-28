import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation, BrowserRouter } from 'react-router-dom';

import { Counter } from './features/counter/Counter';
import Index from './features/auths/Index';


import './App.css';
import Nav from './features/Navs/Nav';
import readToken from './services/tokens/reedToken';
import Home from './features/homes/Home';
import About from './features/abouts/About';
import Player from './features/players/Player';
import Halls from './features/halls/Halls';

function App() {
  // const navigate = useNavigate();
  const [loginTrue, setLoginTrue] = useState(false)
  useEffect(() => {
    const dataItemLocalStorage = readToken()
    console.log("🚀 ~ file: App.jsx ~ line 14 ~ useEffect ~ dataItemLocalStorage", dataItemLocalStorage)
    if (

      dataItemLocalStorage?.isAuthenticated
    ) {
      // navigate('/main')


      // setLoginTrue(false)


    }


  }, [loginTrue])





  return (
    <div className="">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/auth" element={<Index />} />
          <Route path="/" element={<Home />} />
          <Route path="/hall" element={<Halls />} />
          <Route path="/player" element={<Player />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </BrowserRouter>











    </div>
  );
}

export default App;
