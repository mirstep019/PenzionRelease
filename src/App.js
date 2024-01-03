import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Accommodation from './Pages/Accommodation';
import Pricing from './Pages/Pricing';
import Contacts from './Pages/Contacts';
import { styled } from 'styled-components';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
        <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} windowWidth={windowWidth} />
        <AppContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </AppContainer>
    </>
  );
}

const AppContainer = styled.div`
  text-align: center;
`

export default App;
